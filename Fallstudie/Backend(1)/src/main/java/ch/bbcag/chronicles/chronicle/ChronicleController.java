package ch.bbcag.chronicles.chronicle;

import ch.bbcag.chronicles.chronicle.dto.ChronicleMapper;
import ch.bbcag.chronicles.chronicle.dto.ChronicleRequestDTO;
import ch.bbcag.chronicles.chronicle.dto.ChronicleResponseDTO;
import ch.bbcag.chronicles.user.User;
import jakarta.persistence.EntityNotFoundException;
import jakarta.transaction.Transactional;
import jakarta.validation.Valid;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

@RestController
@RequestMapping(ChronicleController.PATH)
public class ChronicleController {
    public static final String PATH = "/chronicles";

    private final ChronicleService chronicleService;

    public ChronicleController(ChronicleService chronicleService) {
        this.chronicleService = chronicleService;
    }

    @GetMapping
    public ResponseEntity<List<ChronicleResponseDTO>> findAll() {
        List<Chronicle> chronicles = chronicleService.findAll();
        List<ChronicleResponseDTO> dtos = ChronicleMapper.toDTO(chronicles);
        return ResponseEntity.ok(dtos);
    }

    @GetMapping("/{id}")
    public ResponseEntity<ChronicleResponseDTO> findById(@PathVariable Integer id) {
        try {
            Chronicle chronicle = chronicleService.findById(id);
            ChronicleResponseDTO dto = ChronicleMapper.toDTO(chronicle);
            return ResponseEntity.ok(dto);
        } catch (EntityNotFoundException e) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Chronicle was not found");
        }
    }

    @PostMapping
    public ResponseEntity<ChronicleResponseDTO> create(@Valid @RequestBody ChronicleRequestDTO chronicleRequestDTO, @AuthenticationPrincipal User user) {
        try {
            Chronicle chronicle = ChronicleMapper.fromDTO(chronicleRequestDTO);
            chronicle.setUser(user);
            chronicleService.save(chronicle);
            ChronicleResponseDTO dto = ChronicleMapper.toDTO(chronicle);
            return ResponseEntity.status(HttpStatus.CREATED).body(dto);
        } catch (DataIntegrityViolationException e) {
            throw new ResponseStatusException(HttpStatus.CONFLICT, "Chronicle could not be created");
        }
    }

    @PutMapping("/{id}")
    @Transactional
    public ResponseEntity<ChronicleResponseDTO> update(@PathVariable Integer id, @Valid @RequestBody ChronicleRequestDTO chronicleRequestDTO, @AuthenticationPrincipal User user) {
        try {
            Chronicle updatedChronicle = ChronicleMapper.fromDTO(chronicleRequestDTO);
            Chronicle chronicle = chronicleService.findById(id);

            chronicleService.update(chronicle, updatedChronicle);
            ChronicleResponseDTO dto = ChronicleMapper.toDTO(chronicle);
            return ResponseEntity.ok(dto);
        } catch (DataIntegrityViolationException e) {
            throw new ResponseStatusException(HttpStatus.CONFLICT, "Chronicle could not be created");
        }
    }

    @DeleteMapping("/{id}")
    @Transactional
    public ResponseEntity<?> deleteById(@PathVariable Integer id) {
        return chronicleService.deleteById(id) ? ResponseEntity.noContent().build() : ResponseEntity.notFound().build();
    }
}

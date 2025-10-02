package ch.bbcag.chronicles.chronicle;

import jakarta.persistence.EntityNotFoundException;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ChronicleService {
    private final ChronicleRepository chronicleRepository;

    public ChronicleService(ChronicleRepository chronicleRepository) {
        this.chronicleRepository = chronicleRepository;
    }

    public List<Chronicle> findAll() {
        return chronicleRepository.findAll();
    }

    public Chronicle findById(Integer id) {
        return chronicleRepository.findById(id).orElseThrow(EntityNotFoundException::new);
    }

    public void save(Chronicle chronicle) {
        chronicleRepository.save(chronicle);
    }

    public void update(Chronicle chronicle, Chronicle updatedChronicle) {
        chronicle.setTitle(updatedChronicle.getTitle());
        chronicle.setText(updatedChronicle.getText());
        chronicleRepository.save(chronicle);
    }

    public boolean deleteById(int id) {
        try {
            Chronicle chronicle = findById(id);
            chronicleRepository.deleteById(id);
            return true;
        } catch (EntityNotFoundException e) {
            return false;
        }
    }

}

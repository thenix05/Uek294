package ch.bbcag.chronicles.chronicle.dto;

import ch.bbcag.chronicles.chronicle.Chronicle;

import java.util.List;

public class ChronicleMapper {
    public static Chronicle fromDTO(ChronicleRequestDTO chronicleRequestDTO) {
        Chronicle chronicle = new Chronicle();
        chronicle.setTitle(chronicleRequestDTO.getTitle());
        chronicle.setText(chronicleRequestDTO.getText());
        return chronicle;
    }

    public static ChronicleResponseDTO toDTO(Chronicle chronicle) {
        ChronicleResponseDTO responseDTO = new ChronicleResponseDTO();
        responseDTO.setId(chronicle.getId());
        responseDTO.setTitle(chronicle.getTitle());
        responseDTO.setText(chronicle.getText());
        responseDTO.setUser(chronicle.getUser().getUsername());
        responseDTO.setCreatedAt(chronicle.getCreatedAt());
        responseDTO.setUpdatedAt(chronicle.getUpdatedAt());
        return responseDTO;
    }

    public static List<ChronicleResponseDTO> toDTO(List<Chronicle> chronicles) {
        return chronicles.stream().map(ChronicleMapper::toDTO).toList();
    }
}

package ch.bbcag.chronicles.chronicle.dto;

import jakarta.validation.constraints.NotBlank;

import java.util.Objects;

public class ChronicleRequestDTO {
    @NotBlank
    private String title;
    @NotBlank
    private String text;

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        ChronicleRequestDTO that = (ChronicleRequestDTO) o;
        return Objects.equals(title, that.title) && Objects.equals(text, that.text);
    }

    @Override
    public int hashCode() {
        return Objects.hash(title, text);
    }

    @Override
    public String toString() {
        return "ChronicleRequestDTO{" +
                "title='" + title + '\'' +
                ", description='" + text + '\'' +
                '}';
    }
}

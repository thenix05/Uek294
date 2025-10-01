package ch.bbcag.chronicles.chronicle.dto;

import java.time.LocalDateTime;
import java.util.Objects;

public class ChronicleResponseDTO extends ChronicleRequestDTO {
    private int id;
    private String user;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getUser() {
        return user;
    }

    public void setUser(String user) {
        this.user = user;
    }

    public LocalDateTime getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(LocalDateTime createdAt) {
        this.createdAt = createdAt;
    }

    public LocalDateTime getUpdatedAt() {
        return updatedAt;
    }

    public void setUpdatedAt(LocalDateTime updatedAt) {
        this.updatedAt = updatedAt;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        if (!super.equals(o)) return false;
        ChronicleResponseDTO that = (ChronicleResponseDTO) o;
        return Objects.equals(user, that.user) && Objects.equals(createdAt, that.createdAt) && Objects.equals(updatedAt, that.updatedAt);
    }

    @Override
    public int hashCode() {
        return Objects.hash(super.hashCode(), user, createdAt, updatedAt);
    }

    @Override
    public String toString() {
        return "ChronicleResponseDTO{" +
                "user='" + user + '\'' +
                ", createdAt=" + createdAt +
                ", updatedAt=" + updatedAt +
                '}';
    }
}

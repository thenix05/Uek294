import Chronicle from "@/Components/Chronicle";
import Input from "@/Components/Input";
import TextArea from "@/Components/TextArea";
import ButtonGroup from "@/Components/ButtonGroup";
import Button from "@/Components/Button";
import LinkButton from "@/Components/LinkButton";

export default function ChronicListRoute() {
  return (
    <div>
      <Chronicle
        title="Ein galaktischer Sterneneintrag"
        text="Hier erscheint der neue Sterneneintrag"
        url="#"
      />
      <Input label="Titel" placeholder="Gib einen Titel ein" />
      <TextArea label="Text" placeholder="Gib einen Text ein" />
      <ButtonGroup>
        <Button>Speichern</Button>
        <LinkButton to="#" secondary>
          Abbrechen
        </LinkButton>
      </ButtonGroup>
      <LinkButton to="#" secondary>
        Zurück
      </LinkButton>
    </div>
  );
}

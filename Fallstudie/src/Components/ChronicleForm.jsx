import { Form } from "react-router";

import Input from "./Input";
import Textarea from "./TextArea";
import Button from "./Button";
import ButtonGroup from "./ButtonGroup";

export default function ChronicleForm({ onCancel }) {
  return (
    <Form method="post">
      <Input
        label="Titel: *"
        type="text"
        name="title"
        placeholder="Bitte einen Titel eingeben"
      />

      <Textarea
        label="Text: *"
        name="text"
        placeholder="Bitte einen Text eingeben"
      />
      <ButtonGroup>
        <Button type="submit">Speichern</Button>
        <Button type="button" secondary onClick={onCancel}>
          Abbrechen
        </Button>
      </ButtonGroup>
    </Form>
  );
}

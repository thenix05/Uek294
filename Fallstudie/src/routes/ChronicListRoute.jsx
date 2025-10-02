import Chronicle from "@/Components/Chronicle";
import Input from "@/Components/Input";
import TextArea from "@/Components/TextArea";
import ButtonGroup from "@/Components/ButtonGroup";
import Button from "@/Components/Button";
import LinkButton from "@/Components/LinkButton";
import { getChronicles } from "@/lib/chronicles";
import { useLoaderData } from "react-router-dom";

async function fetchChronicles() {
  return getChronicles();
}

export default function ChronicListRoute() {
  const data = useLoaderData();
  return (
    <div>
      {data.map(({ title, text, id }) => {
        return (
          <Chronicle
            key={id}
            title={title}
            text={text}
            url={`chronicles/${id}`}
          />
        );
      })}
      {/* <Chronicle title={title} text={text} url={`chronicles/${id}`} /> */}
      {/* <Input label="Titel" placeholder="Gib einen Titel ein" />
      <TextArea label="Text" placeholder="Gib einen Text ein" />
      <ButtonGroup>
        <Button>Speichern</Button>
        <LinkButton to="#" secondary>
          Abbrechen
        </LinkButton>
      </ButtonGroup>
      <LinkButton to="#" secondary>
        Zurück
      </LinkButton> */}
    </div>
  );
}

ChronicListRoute.loader = fetchChronicles;

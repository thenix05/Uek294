import LinkButton from "./LinkButton";

export default function Header() {
  return (
    <div>
      <LinkButton
        to={`chronicles/create`}
        children={"Neue Chronik erstellen"}
      ></LinkButton>
    </div>
  );
}

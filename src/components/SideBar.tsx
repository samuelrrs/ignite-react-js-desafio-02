import { Button } from "./Button";
export function SideBar({ genres, id, title, iconName, onClick, selected }) {
  // Complete aqui
  <nav className="sidebar">
    <span>
      Watch<p>Me</p>
    </span>

    <div className="buttons-container">
      {genres.map((genre) => (
        <Button
          id={id}
          title={title}
          iconName={iconName}
          onClick={onClick}
          selected={selected}
        />
      ))}
    </div>
  </nav>;
}

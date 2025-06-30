import { useState } from "react";
import { Burger, Line } from "./BurgerMenu.style";

export const BurgerMenu = () => {
  const [open, setOpen] = useState(false);

  return (
    <Burger onClick={() => setOpen(!open)}>
      <Line $open={open} $index={1} />
      <Line $open={open} $index={2} />
      <Line $open={open} $index={3} />
    </Burger>
  );
};

import React, { useState } from "react";
import RequirementsDialog from "./RequirementsDialog";
import { RequirementsButton } from "./styled";

const Requirements = (props) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <RequirementsButton onClick={() => setOpen(true)}>
        Clique para ver os requisitos
      </RequirementsButton>
      {open && <RequirementsDialog onClose={() => setOpen(false)} />}
    </>
  );
};

export default Requirements;

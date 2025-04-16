import React, { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import CV from "./CV";

const DownloadCVButton = () => {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: "Brian_Muthomi_Mutwiri_CV"
  });

  return (
    <div style={{ display: "inline" }}>
      <button className="btn" onClick={handlePrint} style={{ margin: "8px 0" }}>
        Download CV (PDF)
      </button>
      {/* Hidden CV component for printing */}
      <div style={{ display: "none" }}>
        <CV ref={componentRef} />
      </div>
    </div>
  );
};

export default DownloadCVButton;

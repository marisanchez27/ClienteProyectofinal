import React from "react";
import MariLogo from "../../../../assets/img/jpg/logok.jpg";

import "./PresentationCourses.scss";

export default function PresentationCourses() {
  return (
    <div className="presentation-courses">
      <img src={MariLogo} alt="Frikis Cosas" />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempus,
        ipsum id dictum convallis, lacus turpis rhoncus magna, nec varius mi leo
        vitae ligula. Maecenas vitae felis sed mauris tincidunt facilisis.
        Vestibulum dignissim gravida quam, quis ullamcorper elit. Donec in est
        vestibulum, congue risus ut, tempor est. Suspendisse vel dui sodales,
        feugiat velit vitae, tincidunt enim. Vestibulum ante ipsum primis in
        faucibus orci luctus et ultrices posuere cubilia curae; Class aptent
        taciti sociosqu ad litora torquent per conubia nostra, per inceptos
        himenaeos. Praesent mollis mauris augue, ac tincidunt tellus dapibus
        non. Mauris sed rutrum quam.
      </p>
      <p>¡¡¡Échales un vistazo y aprovecha las ofertas!!!</p>
    </div>
  );
}

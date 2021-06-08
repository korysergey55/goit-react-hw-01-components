import React from 'react';
import style from "./Section.module.css";
const Section = ({children, title}) => {
    return (
     <section className={style.section}>
      <h2 className={style.section_title}>{title.toUpperCase()}</h2>
      {children}
     </section>
    );
}

export default Section;
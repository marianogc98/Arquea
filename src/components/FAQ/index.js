import React from "react";
import {Data} from './Data';
import './style.css';
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";

// Demo styles, see 'Styles' section below for some notes on use.
import "react-accessible-accordion/dist/fancy-example.css";


const FAQ = () => {
  return (
    <Accordion className="arquea" id="FAQ">
      <h3>Preguntas Frecuentes</h3>
        {
            Data.map((item) => {
                return (
                    <AccordionItem className="item">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        {item.question}
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        {item.answer}
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>
                );
            })
        }
    </Accordion>
  );
};

export default FAQ;

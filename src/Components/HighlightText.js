import React, { useEffect, useRef, useState } from "react";
import "./index.scss";
import { toRange, fromRange } from "xpath-range";
import { MdColorize } from "react-icons/md";
import { AiOutlineComment } from "react-icons/ai";
import { FaBold } from "react-icons/fa";
import { GrUndo } from "react-icons/gr";

const HTMLJSON = {
  type: "Element",
  tagName: "section",
  attributes: {},
  children: [
    { type: "Text", content: "\n​\n        " },
    {
      type: "Element",
      tagName: "legend",
      attributes: { className: "hi" },
      children: [{ type: "Text", content: "CHRONIC ABDOMEN" }],
    },
    { type: "Text", content: "\n        " },
    {
      type: "Element",
      tagName: "footer",
      attributes: { className: "hello dear" },
      children: [{ type: "Text", content: "91" }],
    },
    { type: "Text", content: "\n        " },
    {
      type: "Element",
      tagName: "main",
      attributes: {},
      children: [
        { type: "Text", content: "\n            " },
        {
          type: "Element",
          tagName: "div",
          attributes: {},
          children: [
            {
              type: "Text",
              content: "\n                \n                    ",
            },
            {
              type: "Element",
              tagName: "p",
              attributes: { style: { textAlign: "center" } },
              children: [{ type: "Text", content: "↓" }],
            },
            { type: "Text", content: "\n                    " },
            {
              type: "Element",
              tagName: "p",
              attributes: { style: { textAlign: "center" } },
              children: [{ type: "Text", content: "Absorption of all bile" }],
            },
            { type: "Text", content: "\n                    " },
            {
              type: "Element",
              tagName: "p",
              attributes: { style: { textAlign: "center" } },
              children: [{ type: "Text", content: "↓" }],
            },
            { type: "Text", content: "\n                    " },
            {
              type: "Element",
              tagName: "p",
              attributes: { style: { textAlign: "center" } },
              children: [
                { type: "Text", content: "Secretion of mucous in GB" },
              ],
            },
            { type: "Text", content: "\n                    " },
            {
              type: "Element",
              tagName: "p",
              attributes: { style: { textAlign: "center" } },
              children: [{ type: "Text", content: "↓" }],
            },
            { type: "Text", content: "\n                    " },
            {
              type: "Element",
              tagName: "p",
              attributes: { style: { textAlign: "center" } },
              children: [
                {
                  type: "Text",
                  content: "Distention of GB causing mucocele/ hydrops of GB",
                },
              ],
            },
            {
              type: "Text",
              content: "\n                    \n                    ",
            },
            {
              type: "Element",
              tagName: "h4",
              attributes: {},
              children: [{ type: "Text", content: "C/F:" }],
            },
            { type: "Text", content: "\n                    " },
            {
              type: "Element",
              tagName: "ul",
              attributes: { style: { listStyleType: "square" } },
              children: [
                { type: "Text", content: "\n                    " },
                {
                  type: "Element",
                  tagName: "li",
                  attributes: {},
                  children: [
                    {
                      type: "Text",
                      content: "Painless swelling in the right hypochondrium",
                    },
                  ],
                },
                { type: "Text", content: "\n                    " },
                {
                  type: "Element",
                  tagName: "li",
                  attributes: {},
                  children: [
                    {
                      type: "Text",
                      content:
                        "Nontender, smooth, soft, globular, palpable GB (content is sterile)",
                    },
                  ],
                },
                { type: "Text", content: "\n                    " },
                {
                  type: "Element",
                  tagName: "li",
                  attributes: {},
                  children: [{ type: "Text", content: "Dyspepsia" }],
                },
                { type: "Text", content: "\n                    " },
              ],
            },
            { type: "Text", content: "\n                    " },
            {
              type: "Element",
              tagName: "h4",
              attributes: {},
              children: [{ type: "Text", content: "Inv:" }],
            },
            { type: "Text", content: "\n                    " },
            {
              type: "Element",
              tagName: "ul",
              attributes: { style: { listStyleType: "square" } },
              children: [
                { type: "Text", content: "\n                    " },
                {
                  type: "Element",
                  tagName: "li",
                  attributes: {},
                  children: [{ type: "Text", content: "U/S abdomen" }],
                },
                { type: "Text", content: "\n                    " },
                {
                  type: "Element",
                  tagName: "li",
                  attributes: {},
                  children: [{ type: "Text", content: "LFT" }],
                },
                { type: "Text", content: "\n                    " },
              ],
            },
            { type: "Text", content: "\n                    " },
            {
              type: "Element",
              tagName: "h4",
              attributes: {},
              children: [{ type: "Text", content: "T/T:" }],
            },
            { type: "Text", content: "\n                    " },
            {
              type: "Element",
              tagName: "ul",
              attributes: { style: { listStyleType: "square" } },
              children: [
                { type: "Text", content: "\n                    " },
                {
                  type: "Element",
                  tagName: "li",
                  attributes: {},
                  children: [{ type: "Text", content: "Cholecystectomy" }],
                },
                { type: "Text", content: "\n                    " },
              ],
            },
            { type: "Text", content: "\n                    " },
            {
              type: "Element",
              tagName: "h4",
              attributes: {},
              children: [{ type: "Text", content: "Complication:" }],
            },
            { type: "Text", content: "\n                    " },
            {
              type: "Element",
              tagName: "ul",
              attributes: { style: { listStyleType: "square" } },
              children: [
                { type: "Text", content: "\n                    " },
                {
                  type: "Element",
                  tagName: "li",
                  attributes: {},
                  children: [{ type: "Text", content: "Empyema" }],
                },
                { type: "Text", content: "\n                    " },
                {
                  type: "Element",
                  tagName: "li",
                  attributes: {},
                  children: [
                    { type: "Text", content: "Pseudomyxoma peritonei" },
                  ],
                },
                { type: "Text", content: "\n                    " },
              ],
            },
            {
              type: "Text",
              content: "\n                    \n                   ",
            },
            {
              type: "Element",
              tagName: "h2",
              attributes: {},
              children: [{ type: "Text", content: "EMPYEMA:" }],
            },
            { type: "Text", content: "\n                    " },
            {
              type: "Element",
              tagName: "p",
              attributes: {},
              children: [
                {
                  type: "Text",
                  content:
                    "Type of acute cholecystitis wherein GB is filled with pus.",
                },
              ],
            },
            { type: "Text", content: "\n                    " },
            {
              type: "Element",
              tagName: "p",
              attributes: {},
              children: [
                { type: "Text", content: "Also in pre-existing mucocele." },
              ],
            },
            { type: "Text", content: "\n                    " },
            {
              type: "Element",
              tagName: "p",
              attributes: {},
              children: [
                {
                  type: "Element",
                  tagName: "b",
                  attributes: {},
                  children: [{ type: "Text", content: "Common in:" }],
                },
              ],
            },
            { type: "Text", content: "\n                    " },
            {
              type: "Element",
              tagName: "ul",
              attributes: { style: { listStyleType: "square" } },
              children: [
                { type: "Text", content: "\n                    " },
                {
                  type: "Element",
                  tagName: "li",
                  attributes: {},
                  children: [{ type: "Text", content: "Impacted stone" }],
                },
                { type: "Text", content: "\n                    " },
              ],
            },
            {
              type: "Text",
              content: "\n                   \n                    ",
            },
          ],
        },
        { type: "Text", content: "\n                    " },
        {
          type: "Element",
          tagName: "div",
          attributes: {},
          children: [
            { type: "Text", content: "\n                        " },
            {
              type: "Element",
              tagName: "ul",
              attributes: { style: { listStyleType: "square" } },
              children: [
                { type: "Text", content: "\n                            " },
                {
                  type: "Element",
                  tagName: "li",
                  attributes: {},
                  children: [{ type: "Text", content: "Diabetes mellitus" }],
                },
                { type: "Text", content: "\n                            " },
                {
                  type: "Element",
                  tagName: "li",
                  attributes: {},
                  children: [
                    {
                      type: "Text",
                      content: "Immunocompromised conditions like HIV, steroid",
                    },
                  ],
                },
                { type: "Text", content: "\n                            " },
              ],
            },
            { type: "Text", content: "\n                            " },
            {
              type: "Element",
              tagName: "h4",
              attributes: {},
              children: [{ type: "Text", content: "C/F:" }],
            },
            { type: "Text", content: "\n                            " },
            {
              type: "Element",
              tagName: "ul",
              attributes: { style: { listStyleType: "square" } },
              children: [
                { type: "Text", content: "\n                            " },
                {
                  type: "Element",
                  tagName: "li",
                  attributes: {},
                  children: [{ type: "Text", content: "Fever, toxicity" }],
                },
                { type: "Text", content: "\n                            " },
                {
                  type: "Element",
                  tagName: "li",
                  attributes: {},
                  children: [
                    {
                      type: "Text",
                      content: "Pain &amp; tenderness in right hypochondrium",
                    },
                  ],
                },
                { type: "Text", content: "\n                            " },
                {
                  type: "Element",
                  tagName: "li",
                  attributes: {},
                  children: [
                    {
                      type: "Text",
                      content:
                        "Tender, smooth, globular GB palpable in right hypochondrium",
                    },
                  ],
                },
                { type: "Text", content: "\n                            " },
              ],
            },
            { type: "Text", content: "\n                            " },
            {
              type: "Element",
              tagName: "h4",
              attributes: {},
              children: [{ type: "Text", content: "Inv:" }],
            },
            { type: "Text", content: "\n                            " },
            {
              type: "Element",
              tagName: "ul",
              attributes: { style: { listStyleType: "square" } },
              children: [
                { type: "Text", content: "\n                            " },
                {
                  type: "Element",
                  tagName: "li",
                  attributes: {},
                  children: [{ type: "Text", content: "U/S abdomen" }],
                },
                { type: "Text", content: "\n                            " },
                {
                  type: "Element",
                  tagName: "li",
                  attributes: {},
                  children: [{ type: "Text", content: "TLC increase" }],
                },
                { type: "Text", content: "\n                            " },
                {
                  type: "Element",
                  tagName: "li",
                  attributes: {},
                  children: [{ type: "Text", content: "Radioisotope scan" }],
                },
                { type: "Text", content: "\n                            " },
              ],
            },
            {
              type: "Text",
              content:
                "\n                            \n                            ",
            },
            {
              type: "Element",
              tagName: "h4",
              attributes: {},
              children: [{ type: "Text", content: "T/T:" }],
            },
            { type: "Text", content: "\n                            " },
            {
              type: "Element",
              tagName: "ul",
              attributes: { style: { listStyleType: "square" } },
              children: [
                { type: "Text", content: "\n                            " },
                {
                  type: "Element",
                  tagName: "li",
                  attributes: {},
                  children: [
                    { type: "Text", content: "Broad spectrum antibiotic" },
                  ],
                },
                { type: "Text", content: "\n                            " },
                {
                  type: "Element",
                  tagName: "li",
                  attributes: {},
                  children: [
                    { type: "Text", content: "Emergency cholecystectomy" },
                  ],
                },
                { type: "Text", content: "\n                            " },
                {
                  type: "Element",
                  tagName: "li",
                  attributes: {},
                  children: [
                    {
                      type: "Text",
                      content:
                        "Often, cholecystostomy followed by cholecystectomy after 3-6 weeks",
                    },
                  ],
                },
                { type: "Text", content: "\n                            " },
              ],
            },
            {
              type: "Text",
              content:
                "\n                            \n                            ",
            },
            {
              type: "Element",
              tagName: "h2",
              attributes: {},
              children: [{ type: "Text", content: "OBSTRUCTIVE JAUNDICE" }],
            },
            { type: "Text", content: "\n                            " },
            {
              type: "Element",
              tagName: "p",
              attributes: {},
              children: [
                {
                  type: "Text",
                  content:
                    "Jaundice d/t obstruction in extrahepatic biliary tree.",
                },
              ],
            },
            { type: "Text", content: "\n                            " },
            {
              type: "Element",
              tagName: "p",
              attributes: {},
              children: [
                {
                  type: "Element",
                  tagName: "b",
                  attributes: {},
                  children: [{ type: "Text", content: "Courvoisier's law" }],
                },
                {
                  type: "Text",
                  content:
                    ": 'In a patient with jaundice if there is a palpable gallbladder it is probably not d/t stones.",
                },
              ],
            },
            { type: "Text", content: "\n                            " },
            {
              type: "Element",
              tagName: "p",
              attributes: {},
              children: [
                {
                  type: "Element",
                  tagName: "b",
                  attributes: { data: "" },
                  children: [
                    { type: "Text", content: "Exception to the rule: " },
                  ],
                },
              ],
            },
            { type: "Text", content: "\n                            " },
            {
              type: "Element",
              tagName: "ul",
              attributes: { style: { listStyleType: "square" } },
              children: [
                { type: "Text", content: "\n                            " },
                {
                  type: "Element",
                  tagName: "li",
                  attributes: {},
                  children: [
                    {
                      type: "Text",
                      content:
                        "Double impacted stone: One in CBD and one in cystic duct, with mucocele of gallbladder.",
                    },
                  ],
                },
                { type: "Text", content: "\n                            " },
                {
                  type: "Element",
                  tagName: "li",
                  attributes: {},
                  children: [
                    {
                      type: "Text",
                      content: "Large stone in Hartmann's pouch.",
                    },
                  ],
                },
                { type: "Text", content: "\n                            " },
                {
                  type: "Element",
                  tagName: "li",
                  attributes: {},
                  children: [
                    {
                      type: "Text",
                      content: "Empyema gallbladder with CBD stone.",
                    },
                  ],
                },
                { type: "Text", content: "\n                            " },
              ],
            },
            { type: "Text", content: "\n                    " },
          ],
        },
        { type: "Text", content: "\n        " },
      ],
    },
    { type: "Text", content: "\n        \n            " },
    {
      type: "Element",
      tagName: "h4",
      attributes: {},
      children: [{ type: "Text", content: "Causes of obstructive jaundice" }],
    },
    { type: "Text", content: "\n            " },
    {
      type: "Element",
      tagName: "table",
      attributes: {},
      children: [
        { type: "Text", content: "\n            " },
        {
          type: "Element",
          tagName: "tbody",
          attributes: {},
          children: [
            { type: "Text", content: "\n            " },
            {
              type: "Element",
              tagName: "tr",
              attributes: {},
              children: [
                { type: "Text", content: "\n            " },
                {
                  type: "Element",
                  tagName: "th",
                  attributes: {},
                  children: [
                    { type: "Text", content: "\n            " },
                    {
                      type: "Element",
                      tagName: "p",
                      attributes: {},
                      children: [{ type: "Text", content: "Intraluminal" }],
                    },
                    { type: "Text", content: "\n            " },
                  ],
                },
                { type: "Text", content: "\n            " },
                {
                  type: "Element",
                  tagName: "th",
                  attributes: {},
                  children: [
                    { type: "Text", content: "\n            " },
                    {
                      type: "Element",
                      tagName: "p",
                      attributes: {},
                      children: [{ type: "Text", content: "Intramural" }],
                    },
                    { type: "Text", content: "\n            " },
                  ],
                },
                { type: "Text", content: "\n            " },
                {
                  type: "Element",
                  tagName: "th",
                  attributes: {},
                  children: [
                    { type: "Text", content: "\n            " },
                    {
                      type: "Element",
                      tagName: "p",
                      attributes: {},
                      children: [{ type: "Text", content: "Extraluminal" }],
                    },
                    { type: "Text", content: "\n            " },
                  ],
                },
                { type: "Text", content: "\n            " },
              ],
            },
            { type: "Text", content: "\n            " },
            {
              type: "Element",
              tagName: "tr",
              attributes: {},
              children: [
                { type: "Text", content: "\n            " },
                {
                  type: "Element",
                  tagName: "td",
                  attributes: {},
                  children: [
                    { type: "Text", content: "\n            " },
                    {
                      type: "Element",
                      tagName: "p",
                      attributes: {},
                      children: [
                        {
                          type: "Text",
                          content:
                            "Stones in the biliary tree primary or migrated",
                        },
                      ],
                    },
                    { type: "Text", content: "\n            " },
                  ],
                },
                { type: "Text", content: "\n            " },
                {
                  type: "Element",
                  tagName: "td",
                  attributes: {},
                  children: [
                    { type: "Text", content: "\n            " },
                    {
                      type: "Element",
                      tagName: "p",
                      attributes: {},
                      children: [
                        { type: "Text", content: "Inflammatory strictures" },
                      ],
                    },
                    { type: "Text", content: "\n            " },
                    { type: "Element", tagName: "br", attributes: {} },
                    { type: "Text", content: "\n            " },
                    {
                      type: "Element",
                      tagName: "p",
                      attributes: {},
                      children: [
                        {
                          type: "Text",
                          content:
                            "E.g. 10 sclerosing cholangitis 20 sclerosing cholangitis , Worm infestations",
                        },
                      ],
                    },
                    { type: "Text", content: "\n            " },
                  ],
                },
                { type: "Text", content: "\n            " },
                {
                  type: "Element",
                  tagName: "td",
                  attributes: {},
                  children: [
                    { type: "Text", content: "\n            " },
                    {
                      type: "Element",
                      tagName: "p",
                      attributes: {},
                      children: [{ type: "Text", content: "Periampullary ca" }],
                    },
                    { type: "Text", content: "\n            " },
                    { type: "Element", tagName: "br", attributes: {} },
                    { type: "Text", content: "\n            " },
                    {
                      type: "Element",
                      tagName: "p",
                      attributes: {},
                      children: [
                        {
                          type: "Text",
                          content:
                            "E.g. Ca head of pancreas , ca ampulla of vater , ca of duodenum ( 2 cm around ampulla of vater), distal cholangiocarcinoma",
                        },
                      ],
                    },
                    { type: "Text", content: "\n            " },
                  ],
                },
                { type: "Text", content: "\n            " },
              ],
            },
            { type: "Text", content: "\n            " },
            {
              type: "Element",
              tagName: "tr",
              attributes: {},
              children: [
                { type: "Text", content: "\n            " },
                {
                  type: "Element",
                  tagName: "td",
                  attributes: {},
                  children: [
                    { type: "Text", content: "\n            " },
                    {
                      type: "Element",
                      tagName: "p",
                      attributes: {},
                      children: [
                        {
                          type: "Text",
                          content: "Multiple intrahepatic stones",
                        },
                      ],
                    },
                    { type: "Text", content: "\n            " },
                  ],
                },
                { type: "Text", content: "\n            " },
                {
                  type: "Element",
                  tagName: "td",
                  attributes: {},
                  children: [
                    { type: "Text", content: "\n            " },
                    {
                      type: "Element",
                      tagName: "p",
                      attributes: {},
                      children: [
                        {
                          type: "Text",
                          content:
                            "Malignant strictures , Cholangiocarcinoma , Klatskin tumor",
                        },
                      ],
                    },
                    { type: "Text", content: "\n            " },
                  ],
                },
                { type: "Text", content: "\n            " },
                {
                  type: "Element",
                  tagName: "td",
                  attributes: {},
                  children: [
                    { type: "Text", content: "\n            " },
                    {
                      type: "Element",
                      tagName: "p",
                      attributes: {},
                      children: [{ type: "Text", content: "Ca of GB" }],
                    },
                    { type: "Text", content: "\n            " },
                  ],
                },
                { type: "Text", content: "\n            " },
              ],
            },
            { type: "Text", content: "\n            " },
            {
              type: "Element",
              tagName: "tr",
              attributes: {},
              children: [
                { type: "Text", content: "\n            " },
                {
                  type: "Element",
                  tagName: "td",
                  attributes: {},
                  children: [
                    { type: "Text", content: "\n            " },
                    {
                      type: "Element",
                      tagName: "p",
                      attributes: {},
                      children: [{ type: "Text", content: "Ascariasis" }],
                    },
                    { type: "Text", content: "\n            " },
                  ],
                },
                { type: "Text", content: "\n            " },
                {
                  type: "Element",
                  tagName: "td",
                  attributes: {},
                  children: [
                    { type: "Text", content: "\n            " },
                    {
                      type: "Element",
                      tagName: "p",
                      attributes: {},
                      children: [
                        {
                          type: "Text",
                          content:
                            "Traumatic strictures , Manipulation , e.g. ERCP , Gastrectomy, cholecystectomy",
                        },
                      ],
                    },
                    { type: "Text", content: "\n            " },
                  ],
                },
                { type: "Text", content: "\n            " },
                {
                  type: "Element",
                  tagName: "td",
                  attributes: {},
                  children: [
                    { type: "Text", content: "\n            " },
                    {
                      type: "Element",
                      tagName: "p",
                      attributes: {},
                      children: [
                        { type: "Text", content: "Ca of body of pancreas" },
                      ],
                    },
                    { type: "Text", content: "\n            " },
                  ],
                },
                { type: "Text", content: "\n            " },
              ],
            },
            { type: "Text", content: "\n            " },
            {
              type: "Element",
              tagName: "tr",
              attributes: {},
              children: [
                { type: "Text", content: "\n            " },
                {
                  type: "Element",
                  tagName: "td",
                  attributes: {},
                  children: [
                    { type: "Text", content: "\n            " },
                    {
                      type: "Element",
                      tagName: "p",
                      attributes: {},
                      children: [{ type: "Text", content: "Fluke Worms" }],
                    },
                    { type: "Text", content: "\n            " },
                  ],
                },
                { type: "Text", content: "\n            " },
                {
                  type: "Element",
                  tagName: "td",
                  attributes: {},
                  children: [],
                },
                { type: "Text", content: "\n            " },
                {
                  type: "Element",
                  tagName: "td",
                  attributes: {},
                  children: [
                    { type: "Text", content: "\n            " },
                    {
                      type: "Element",
                      tagName: "p",
                      attributes: {},
                      children: [
                        {
                          type: "Text",
                          content: "Secondaries at porta hepatis",
                        },
                      ],
                    },
                    { type: "Text", content: "\n            " },
                  ],
                },
                { type: "Text", content: "\n            " },
              ],
            },
            { type: "Text", content: "\n            " },
            {
              type: "Element",
              tagName: "tr",
              attributes: {},
              children: [
                { type: "Text", content: "\n            " },
                {
                  type: "Element",
                  tagName: "td",
                  attributes: {},
                  children: [
                    { type: "Text", content: "\n            " },
                    {
                      type: "Element",
                      tagName: "p",
                      attributes: {},
                      children: [{ type: "Text", content: "Hydatid cyst" }],
                    },
                    { type: "Text", content: "\n            " },
                  ],
                },
                { type: "Text", content: "\n            " },
                {
                  type: "Element",
                  tagName: "td",
                  attributes: {},
                  children: [],
                },
                { type: "Text", content: "\n            " },
                {
                  type: "Element",
                  tagName: "td",
                  attributes: {},
                  children: [],
                },
                { type: "Text", content: "\n            " },
              ],
            },
            { type: "Text", content: "\n            " },
          ],
        },
        { type: "Text", content: "\n            " },
      ],
    },
    { type: "Text", content: "\n        " },
    {
      type: "Element",
      tagName: "main",
      attributes: {},
      children: [
        { type: "Text", content: "\n            " },
        {
          type: "Element",
          tagName: "div",
          attributes: {},
          children: [
            { type: "Text", content: "\n                " },
            {
              type: "Element",
              tagName: "h4",
              attributes: {},
              children: [{ type: "Text", content: "C/F:" }],
            },
            { type: "Text", content: "\n                " },
            {
              type: "Element",
              tagName: "ul",
              attributes: { style: { listStyleType: "square" } },
              children: [
                { type: "Text", content: "\n                " },
                {
                  type: "Element",
                  tagName: "li",
                  attributes: {},
                  children: [{ type: "Text", content: "Severe jaundice" }],
                },
                { type: "Text", content: "\n                " },
                {
                  type: "Element",
                  tagName: "li",
                  attributes: {},
                  children: [{ type: "Text", content: "Pruritus" }],
                },
                { type: "Text", content: "\n                " },
                {
                  type: "Element",
                  tagName: "li",
                  attributes: {},
                  children: [{ type: "Text", content: "Fever" }],
                },
                { type: "Text", content: "\n                " },
                {
                  type: "Element",
                  tagName: "li",
                  attributes: {},
                  children: [
                    { type: "Text", content: "Loss of weight &amp; appetite" },
                  ],
                },
                { type: "Text", content: "\n                " },
                {
                  type: "Element",
                  tagName: "li",
                  attributes: {},
                  children: [
                    { type: "Text", content: "Pain in right hypochondrium" },
                  ],
                },
                { type: "Text", content: "\n                " },
              ],
            },
            { type: "Text", content: "\n            " },
          ],
        },
        { type: "Text", content: "\n            " },
        {
          type: "Element",
          tagName: "div",
          attributes: {},
          children: [
            { type: "Text", content: "\n                " },
            { type: "Element", tagName: "br", attributes: {} },
            { type: "Text", content: "\n                " },
            { type: "Element", tagName: "br", attributes: {} },
            { type: "Text", content: "\n                " },
            {
              type: "Element",
              tagName: "ul",
              attributes: { style: { listStyleType: "square" } },
              children: [
                { type: "Text", content: "\n                    " },
                {
                  type: "Element",
                  tagName: "li",
                  attributes: {},
                  children: [{ type: "Text", content: "Palpable gallbladder" }],
                },
                { type: "Text", content: "\n                    " },
                {
                  type: "Element",
                  tagName: "li",
                  attributes: {},
                  children: [
                    { type: "Text", content: "Smooth, soft, non tender liver" },
                  ],
                },
                { type: "Text", content: "\n                    " },
                {
                  type: "Element",
                  tagName: "li",
                  attributes: {},
                  children: [
                    {
                      type: "Text",
                      content: "Charcot's triad/Reynold's pentad",
                    },
                  ],
                },
                { type: "Text", content: "\n                    " },
                {
                  type: "Element",
                  tagName: "li",
                  attributes: {},
                  children: [{ type: "Text", content: "Steatorrhoea" }],
                },
                { type: "Text", content: "\n                    " },
              ],
            },
            { type: "Text", content: "\n            " },
          ],
        },
        { type: "Text", content: "\n        " },
      ],
    },
    { type: "Text", content: "\n​\n    " },
  ],
};
//Creating React Elements from HTML JSON
const createComponents = (domElement) => {
  if (
    domElement == undefined ||
    domElement == null ||
    !Object.keys(domElement).length
  ) {
    return [];
  }
  let children = [];
  if (domElement?.children?.length > 0) {
    children = domElement.children.map((child) => {
      if (!child.tagName) return child.content;
      return createComponents(child);
    });
  }

  // Need to clone
  const properties = { ...domElement.attributes } || {};

  // To satisfy React warning that children should have a key
  properties.key = Date.now() + "." + Math.random(1000);

  let tagName = domElement.tagName.toLowerCase();

  return React.createElement(
    tagName,
    properties,
    children.length > 0 ? children : null
  );
};

const UIRender = () => {
  const ref = useRef();
  const floatingBtnRef = useRef();
  const [dom, setDom] = useState(HTMLJSON);
  const [colorpicked, setColorPicked] = useState("");
  const [xpathArray, setXpathArray] = useState([]);
  const [texttohighlight, setTexttohighlight] = useState("");
  const [translateX, setTranslateX] = useState("-100px");
  const [translateY, setTranslateY] = useState("-100px");
  const [showColorPanel, setShowColorPanel] = useState(false);
  const [bold, setBold] = useState(false);
  const [commentPanel, setCommentPanel] = useState(false);
  const [comment, setComment] = useState("");
  const [tooglecommentsave, setToogleCommentSave] = useState(false);
  let NoteContents = createComponents(dom);

  const colorArray = [
    {
      color: "#FFFF00",
      className: "yellow",
    },
    {
      color: "#fff",
      className: "white",
    },
    {
      color: "#990099",
      className: "purple",
    },
    {
      color: "#FF0000",
      className: "red",
    },
    {
      color: "#FF9900",
      className: "orange",
    },
    {
      color: "#00FFFF",
      className: "cyan",
    },
  ];

  useEffect(() => {
    if (!texttohighlight) {
      setTexttohighlight("");
      setBold(false);
      setColorPicked("");
      setComment("");
      return;
    }
    if (!bold && !colorpicked && !comment) {
      return;
    }
    if (xpathArray.length) {
      //removing '' / empty xapth name from array
      const sanitizedXapthArray = xpathArray
        .filter((ele) => ele != "")
        .reverse();
      // console.log('xpath', sanitizedXapthArray?.length);

      const change = (dom) => {
        //getting all xpath one by one from parent to child
        let xpathTags = sanitizedXapthArray.pop();

        if (!xpathTags) return null;

        if (dom?.children?.length && sanitizedXapthArray.length >= 1) {
          let levelofxpathtags = [];

          //Finding the position of xpath tag from ou json
          dom.children.forEach((e, i) => {
            if (
              xpathTags.includes(e?.tagName?.toLowerCase()) ||
              xpathTags.includes(e?.type)
            ) {
              levelofxpathtags.push(i);
            }
          });

          // console.log('kathmandu')
          //get exact children that has been selected xpathTgas.atch ** gives the number which is the index of path
          change(
            dom.children[levelofxpathtags[xpathTags.match(/\[(.*?)\]/)[1] - 1]]
          );
        } else {
          if (dom?.children?.length > 1) {
            // console.log('daang')
            console.log("place1");

            dom?.children?.forEach((e) => {
              if (
                e?.content &&
                e?.content
                  ?.replace(/\s+/g, " ")
                  .trim()
                  .includes(texttohighlight)
              ) {
                let splitcontentSelected = e?.content
                  ?.replace(/\s+/g, " ")
                  .trim()
                  .split(texttohighlight);

                // console.log(splitcontentSelected,'^^^^^^^^')
                //Adding more element to array to consume the index for splitted text/ highlighted text
                for (let i = 0; i < splitcontentSelected?.length; i++) {
                  if (i % 2 != 0) {
                    //making room for text that has been splited out , so we can put mark element inside it
                    splitcontentSelected.splice(i, 0, "spaceformarkedtext");
                  }
                }

                //If we split the text based on highlight selected text and selected text has multiple apperance in paragragh
                //then we map and highlight all matching text
                let children = [];
                splitcontentSelected?.forEach((e, i) => {
                  if (i % 2 != 0) {
                    if (bold) {
                      children.push({
                        type: "Element",
                        tagName: "b",
                        attributes: {},
                        children: [
                          {
                            type: "Text",
                            content: texttohighlight,
                          },
                        ],
                      });
                    } else if (comment) {
                      children.push({
                        type: "Element",
                        tagName: "aside",
                        attributes: {
                          className: "comment-note-container",
                        },
                        children: [
                          {
                            type: "Element",
                            tagName: "strong",
                            attributes: {
                              className: "comment-on-notes",
                              // "data-comment":comment
                            },
                            children: [
                              {
                                type: "Element",
                                tagName: "div",
                                attributes: {
                                  contenteditable: true,
                                  className: "comment-section",
                                },
                                children: [
                                  {
                                    type: "Text",
                                    content: comment,
                                  },
                                  {
                                    type: "Element",
                                    tagName: "a",
                                    attributes: {
                                      className: "removecomment ",
                                      onClick: () => {
                                        handleremovecomment(
                                          texttohighlight,
                                          xpathArray
                                        );
                                      },
                                    },
                                    children: [
                                      {
                                        type: "Text",
                                        content: "remove comment",
                                      },
                                    ],
                                  },
                                ],
                              },

                              {
                                type: "Text",
                                content: texttohighlight,
                              },
                            ],
                          },
                        ],
                      });
                    } else {
                      children.push({
                        type: "Element",
                        tagName: "mark",
                        attributes: {
                          className: colorpicked,
                        },
                        children: [
                          {
                            type: "Text",
                            content: texttohighlight,
                          },
                        ],
                      });
                    }
                  } else {
                    children.push({
                      type: "Text",
                      content: splitcontentSelected[i],
                    });
                  }
                });

                Object.assign(e, {
                  type: "Element",
                  tagName: "span",
                  children: [...children],
                });

                delete e.content;
              }
            });
          } else {
            // console.log('dharan')
            console.log("place2");

            if (
              dom?.children[0]?.content
                ?.replace(/\s+/g, " ")
                .trim()
                ?.includes(texttohighlight)
            ) {
              let splitcontentSelected = dom?.children[0]?.content
                .replace(/\s+/g, " ")
                .trim()
                .split(texttohighlight);

              console.log(splitcontentSelected, "^^^^^^^^!!!!!!!!!!!");

              let children = [];

              //Adding more element to array with splice to consume the index for splitted text/ highlighted text

              for (let i = 0; i < splitcontentSelected?.length; i++) {
                if (i % 2 != 0) {
                  splitcontentSelected.splice(i, 0, "spaceformarkedtext");
                }
              }
              splitcontentSelected?.forEach((e, i) => {
                if (i % 2 != 0) {
                  if (bold) {
                    children.push({
                      type: "Element",
                      tagName: "b",
                      attributes: {},
                      children: [
                        {
                          type: "Text",
                          content: texttohighlight,
                        },
                      ],
                    });
                  } else if (comment) {
                    children.push({
                      type: "Element",
                      tagName: "aside",
                      attributes: {
                        className: "comment-note-container",
                      },
                      children: [
                        {
                          type: "Element",
                          tagName: "strong",
                          attributes: {
                            className: "comment-on-notes",
                            // "data-comment":comment
                          },
                          children: [
                            {
                              type: "Element",
                              tagName: "div",
                              attributes: {
                                contenteditable: true,
                                className: "comment-section",
                              },
                              children: [
                                {
                                  type: "Text",
                                  content: comment,
                                },
                                {
                                  type: "Element",
                                  tagName: "a",
                                  attributes: {
                                    className: "removecomment ",
                                    onClick: () => {
                                      handleremovecomment(
                                        texttohighlight,
                                        xpathArray
                                      );
                                    },
                                  },
                                  children: [
                                    {
                                      type: "Text",
                                      content: "remove comment",
                                    },
                                  ],
                                },
                              ],
                            },

                            {
                              type: "Text",
                              content: texttohighlight,
                            },
                          ],
                        },
                      ],
                    });
                  } else if (colorpicked) {
                    //for color and when not undo
                    children.push({
                      type: "Element",
                      tagName: "mark",
                      attributes: {
                        className: colorpicked,
                      },
                      children: [
                        {
                          type: "Text",
                          content: texttohighlight,
                        },
                      ],
                    });
                  }
                } else {
                  children.push({
                    type: "Text",
                    content: splitcontentSelected[i],
                  });
                }
              });

              Object.assign(dom?.children[0], {
                type: "Element",
                tagName: "span",
                children: [...children],
              });

              delete dom?.children[0].content;
              console.log(dom, "iam??");
              // Object.assign( dom.children[0],{
              //   "type": "Element",
              //   "tagName": "mark",
              //   "attributes": {},
              //   "children": [
              //     {
              //       "type": "Text",
              //       "content": "I am testing 11"
              //     }
              //   ]
              // })
            } else {
              // console.log('HEREEEE',dom)
            }
          }
        }
        return dom;
      };

      let modifiedJSON = change(HTMLJSON);

      if (modifiedJSON) {
        // console.log('xpath modified', modifiedJSON)

        //Object.assign so we can create completely new json with new refrence , which lets state to detect change
        const tempMyObj = Object.assign({}, modifiedJSON);
        setDom(tempMyObj);
      }

      console.log(
        modifiedJSON,
        "*********************************************************************"
      );
    }

    //IF NO XPATH ARRAY
    else {
      console.log("No xpath array available");
    }
    setTexttohighlight("");
    setBold(false);
    setColorPicked("");
    setToogleCommentSave(false);
    setComment("");
  }, [colorpicked, bold, tooglecommentsave]);

  const handleColorpick = (e) => {
    setColorPicked(e.className);
  };

  const handleCommentPanel = (e) => {
    setCommentPanel(true);
  };

  const handleMouseUp = (e) => {
    if (
      window.getSelection().rangeCount >= 1 &&
      window.getSelection().toString().length
    ) {
      //Removing section from range as we know it will always be the starting point
      const xpath = fromRange(window.getSelection()?.getRangeAt(0), ref.current)
        ?.end?.split("section[1]")[1]
        .split("/");
      //set xpath array and highlight text

      setXpathArray(() => [...xpath]);
      setTexttohighlight(window.getSelection().toString());

      setTranslateX(
        e.clientX - floatingBtnRef.current.offsetWidth - 150 + "px"
      );
      setTranslateY(e.clientY + 20 + "px");
    }
  };

  const handleremovecomment = (texthighlight, xpath) => {
    if (!xpath?.length) return;
    const sanitizedXapthArray = xpath.filter((ele) => ele != "").reverse();

    const change = (dom) => {
      let xpathTags = sanitizedXapthArray.pop();

      if (dom?.children?.length && sanitizedXapthArray.length >= 1) {
        let levelofxpathtags = [];

        //Finding the position of xpath tag from ou json
        dom.children.forEach((e, i) => {
          if (
            xpathTags.includes(e?.tagName?.toLowerCase()) ||
            xpathTags.includes(e?.type)
          ) {
            levelofxpathtags.push(i);
          }
        });

        // console.log('kathmandu')
        //get exact children that has been selected xpathTgas.atch ** gives the number which is the index of path
        change(
          dom.children[levelofxpathtags[xpathTags.match(/\[(.*?)\]/)[1] - 1]]
        );
      } else {
        console.log(dom, "this is the comment one");
        if (!dom?.children?.length) return;
        dom?.children?.forEach((e) => {
          if (e?.children?.length) {
            e.children.forEach((ele) => change(ele));
          }

          console.log(e, "test");

          if (e?.children?.length) {
            e?.children?.forEach((element) => {
              if (
                element?.tagName == "aside" &&
                element?.attributes?.className == "comment-note-container"
              ) {
                console.log(element);
                let selectedText = element?.children[0].children[1].content;

                delete element.tagName;
                delete element.children;
                Object.assign(element, {
                  attributes: {},
                  children: [
                    {
                      type: "Text",
                      content: selectedText,
                    },
                  ],
                  tagName: "span",
                  type: "Element",
                });

                console.log(e, "Modified e");
              }
            });
          }

          //       if(e?.tagName == 'aside' && e?.attributes?.className == 'comment-note-container'){
          //  let slectedtextforNote = dom.children[1].content;
          //  console.log(e,"000")
          // Object.assign(e,{
          //   type:'Text',
          //   content:slectedtextforNote
          // })
          // delete e?.tagName
          // }
        });
      }

      return dom;
    };

    let modifiedJSON = change(HTMLJSON);
    const tempMyObj = Object.assign({}, modifiedJSON);

    setDom(tempMyObj);
  };
  const handleMouseDown = (e) => {
    console.log("***", comment);
    if (floatingBtnRef.current.contains(e.target)) return;

    setTranslateX("-100px");
    setTranslateY("-100px");
    setShowColorPanel(false);
    setCommentPanel(false);
    if (comment) {
      setToogleCommentSave(true);
    }
  };

  const handleComment = (e) => {
    setComment(e.target.value);
  };

  const handleColorPanel = () => {
    setShowColorPanel((init) => !init);
  };

  const handleBoldClick = () => {
    setBold(true);
  };



  return (
    <>
      <div
        ref={ref}
        onMouseUp={handleMouseUp}
        onMouseDown={handleMouseDown}
        className="notes-wrapper"
      >
        {/* <h1>{xpathArray?.length}</h1> */}
        {
          <aside
            className="floatingEditorBtn"
            ref={floatingBtnRef}
            style={{ transform: `translate(${translateX},${translateY})` }}
          >
            <strong onClick={handleColorPanel}>
              <MdColorize size={20} />

              {showColorPanel && (
                <div className="color-panel">
                  <h6>Choose color</h6>
                  <div className="color-grid">
                    {colorArray.map((e) => (
                      <span
                        onClick={() => handleColorpick(e)}
                        style={{ backgroundColor: e.color }}
                      ></span>
                    ))}
                  </div>
                </div>
              )}
            </strong>

            <strong onClick={handleBoldClick}>
              <FaBold size={18} />
            </strong>

            {commentPanel && (
              <div className="comment-panel">
                <span onClick={() => setCommentPanel(false)}>X</span>

                <textarea
                  maxLength={1000}
                  onChange={handleComment}
                  placeholder="Dont forget to remove overflow hidden in div"
                  id="comment-box"
                  name="comment-box"
                  placeholder="Enter your text..."
                  rows="14"
                  cols="43"
                ></textarea>
              </div>
            )}
            <span className="comment-tool" onClick={handleCommentPanel}>
              <AiOutlineComment size={18} /> Add Note
            </span>

            {/* <span className='undo-tool' onClick={handleUndo}>
   <GrUndo size={18}/> Undo 

    </span> */}
          </aside>
        }

        {NoteContents}
      </div>
    </>
  );
};

export default UIRender;

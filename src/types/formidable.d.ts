// src/types/formidable.d.ts
import * as formidable from "formidable";

declare module "formidable" {
  interface IncomingForm {
    keepExtensions?: boolean;
  }
}

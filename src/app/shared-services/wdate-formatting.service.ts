import { Injectable } from '@angular/core';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class WdateFormattingService {

  constructor() { }
  public getFormat(): string
  {
    var ddlocale = localStorage.getItem("wigolocaleMODONAGAL");
    
    if (ddlocale == null) {
      ddlocale = 'en_US';
    }
    var languageid = ddlocale.substring(0,2);
    return languageid;
  }

  public getLocale(): string
  {
    var ddlocale = localStorage.getItem("wigolocaleMODONAGAL");
    if (ddlocale == null)
      ddlocale = 'en_US';
    return ddlocale;  
  }  
  public setLocale(ddlocale: string)
  {
    if (ddlocale !== null)
      localStorage.setItem("wigolocaleMODONAGAL",ddlocale);
  }
}

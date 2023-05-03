// customDateAdapter.ts
// description:
//  Provide date format services 
//
//  Modification history:
//      05.09.2022 xan - initial entry
//
// @Copyright Wigo Technologies 2016, 2017, 2018, 2019, 2020, 2021, 2022. All rights reserved
 
import { Injectable } from '@angular/core';
import { MomentDateAdapter } from '@angular/material-moment-adapter';
import * as moment from 'moment';
import { WdateFormattingService } from './../shared-services/wdate-formatting.service';

@Injectable()
export class CustomDateAdapter extends MomentDateAdapter
{
  constructor(private _dateTimeService: WdateFormattingService)
  {
    super('en-US'); // set default locale
  }

  public override format(date: moment.Moment, displayFormat: string): string
  {
    const locale = this._dateTimeService.getLocale();
    const format = this._dateTimeService.getFormat();

    return date.locale(locale).format(format);
  }
}
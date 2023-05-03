import {Component, AfterViewInit,ViewChild} from "@angular/core";
import { faHandshake } from '@fortawesome/free-regular-svg-icons';
import { faTimesCircle } from '@fortawesome/free-regular-svg-icons';
import { faScaleBalanced } from '@fortawesome/free-solid-svg-icons';
import { faRectangleList } from '@fortawesome/free-regular-svg-icons';
import { faPeopleGroup } from '@fortawesome/free-solid-svg-icons';
import { InputEmailComponent } from "src/app/shared-components/input-email/input-email.component";
import * as indexcontroller from '../../../assets/js/wigocontrollers/indexcontroller.js'
import {TranslateService} from '@ngx-translate/core';
import { WdateFormattingService } from "src/app/shared-services/wdate-formatting.service";
import { ActivatedRoute } from '@angular/router';

declare let $: any;
declare var TweenMax: any;

interface Food {
  value: string;
  viewValue: string;
}


@Component({selector: "app-page-home01", templateUrl: "./page-home01.component.html", styleUrls: ["./page-home01.component.css"]})

export class PageHome01Component implements AfterViewInit {

 
  @ViewChild(InputEmailComponent)
  primaryInputEmailComponent!: InputEmailComponent;
 
  "loginB": boolean = true;
  "loginEm": boolean = false;
  "loginPw": boolean = true;
  "selcomp": boolean = false;
  "jsonobj": JSON;
  selected: string = 'option2';
  constructor(private wdatefmt: WdateFormattingService,
    private localize: TranslateService,
    private router: ActivatedRoute) {
      
      var ddlocale = this.wdatefmt.getLocale();
    
      var languageid = ddlocale.substring(0,2);
      localize.setDefaultLang(languageid);
    }

  ngAfterViewInit(): void {
     console.log("loginB = " + this.loginB);
     console.log("primaryInputEmailComp = " + this.primaryInputEmailComponent);
     
     indexcontroller.onIndexInit();
     
  }
  fahandshake = faHandshake;
  fascale = faScaleBalanced;
  farectlist = faRectangleList;
  fapeoplegroup = faPeopleGroup;
  fatimescircle = faTimesCircle;
  initialization() {
    //======================
    // Testimonial
    //======================
    
    // ============================
    // Button Animation
    // ============================
    $(".btn").on("mouseenter mousemove",  (e: { pageX: number; pageY: number; }) => {
      var parentOffset = $(this).offset(),
        relX = e.pageX - parentOffset.left,
        relY = e.pageY - parentOffset.top;
      $(this).find(".bh").css({top: relY, left: relX});
      var origin = relX + "px" + " " + relY + "px";
    }).on("mouseout",  (e: { pageX: number; pageY: number; }) => {
      var parentOffset = $(this).offset(),
        relX = e.pageX - parentOffset.left,
        relY = e.pageY - parentOffset.top;
      $(this).find(".bh").css({top: relY, left: relX});
    });

    // ============================
    // Tweenmax
    // ============================
    this.router.queryParams
      .subscribe(params => {
        
        console.log(" params object = ",params);
        if (params != null) {
        
          var fparams = params['sp'];
          console.log("sp ===> is ==> ", fparams);
         
        }
     
      }
      

    );


  
  }

  ngOnInit() {
    this.initialization();
  }

  wigoLogin(){
    this.loginB = false;
    this.loginEm = true;
    
  }
  
  hideLogin(){
    this.loginB = true;
    this.loginEm = false;
    
  }

  getJsonBack() {
    console.log("Came to the parent func *********************************", this.jsonobj);
  }
  
}
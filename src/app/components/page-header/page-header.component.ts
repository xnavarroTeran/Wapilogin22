import {Component, OnInit} from "@angular/core";
import {TranslateService} from '@ngx-translate/core';
import { WdateFormattingService } from "src/app/shared-services/wdate-formatting.service";

declare let $: any;

@Component({selector: "app-page-header", templateUrl: "./page-header.component.html", styleUrls: ["./page-header.component.css"]})
export class PageHeaderComponent implements OnInit {
  constructor(private wdatefmt: WdateFormattingService,
              private localize: TranslateService) {
    
    var ddlocale = this.wdatefmt.getLocale();
    
    var languageid = ddlocale.substring(0,2);
    localize.defaultLang = languageid;

  }
  apptitle = 'Team Audit';
  landingbg = 'darkseagreen';
  applogo = '../assets/images/logo-product.png';
  initialization() {
    //======================
    // Sticky menu
    //======================

    $(window).scroll(function () {
      if ($(window).scrollTop() >= 1) {
        $(".header").addClass("fixed-header");
      } else {
        $(".header").removeClass("fixed-header");
      }
    });

    //======================
    // Preloder
    //======================
    $(window).on("load", function () {
    
     
      $("body").delay(500).css({overflow: "visible"});
    });

    //======================
    // Mobile menu
    //======================
    $("#mobile-menu-toggler").on("click", function (e: { preventDefault: () => void; }) {
      e.preventDefault();
      $(".primary-menu > ul").slideToggle();
    });
    $(".has-menu-child").append('<i class="menu-dropdown fas fa-angle-down"></i>');

    if ($(window).width() <= 991) {
      $(".menu-dropdown").on("click",  () => {
        $(this).prev().slideToggle("slow");
        $(this).toggleClass("fa-angle-down fa-angle-up");
      });
    }
  }

  ngOnInit() {
    this.initialization();

  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-advantages',
  templateUrl: './advantages.component.html',
  styleUrls: ['./advantages.component.scss']
})
export class AdvantagesComponent implements OnInit {

  constructor() { }
  public advants =[
    {
      title: 'Лучшие продукты',
      text:'Мы честно готовим макаруны только из натуральных и качественных продуктовю Мы не используем консерванты, ароматизаторы и красители.'
    },
    {
      title: 'Много вкусов',
      text:'Наша адача предоставить вам широкое разнообразие вкусов. Вы удивитесь, но у нас более 70 вкусов пероженок.'
    },
    {
      title: 'Бисквитное тесто',
      text:'Все пирожные готовятся на бивсквитном тесте с качественным сливочным маслом 82.5%. В составе нет маргарина и дрожжей!'
    },
    {
      title: 'Честный продукт',
      text:'Вкус, качество и безопасность наших пирогов подтверждена дегустацией о соответствии, которую мы получили <br> 22.06 2016 г.'
    }
   ]
  ngOnInit(): void {
  }

}

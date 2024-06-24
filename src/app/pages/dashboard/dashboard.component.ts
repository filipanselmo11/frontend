import { Component, OnInit } from '@angular/core';
import { CardComponent } from '../../components/card/card.component';
import { ChartComponent } from '../../components/chart/chart.component';
import { ButtonComponent } from '../../components/button/button.component';
import { DialogComponent } from '../../components/dialog/dialog.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [ CardComponent, ChartComponent, ButtonComponent, DialogComponent ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {

  data1: any;
  options1: any;
  data2: any;
  options2: any;

  prodVisible!: boolean;
  categVisible!: boolean;

  loadChart1(): void {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');

    this.data1 = {
      labels: ['Eletrônicos', 'Livros e Mídia', 'Casa e Decoração', 'Brinquedos e Jogos'],
      datasets: [
        {
          data: [100, 50, 40, 30],
          backgroundColor: [
            documentStyle.getPropertyValue('--blue-500'),
            documentStyle.getPropertyValue('--yellow-500'),
            documentStyle.getPropertyValue('--green-500')
          ],
          hoverBackgroundColor: [
            documentStyle.getPropertyValue('--blue-400'),
            documentStyle.getPropertyValue('--yellow-400'),
            documentStyle.getPropertyValue('--green-400')
          ],
        }
      ]
    };
    this.options1 = {
      cutout: '60%',
      plugins: {
        legend: {
          labels: {
            color: textColor
          }
        }
      }
    };
  }

  loadChart2(): void {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');
    const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
    const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

    this.data2 = {
      labels: [
        'Smartphone Samsung Galaxy A03',
        'Smart TV LG 32LQ621CBSB',
        'Tablet Samsung Galaxy Tab',
        'Fritadeira Easy Fry 3.2 L Red Arno',
        'Samsung Galaxy A14 5g',
        'Aquecedor elétrico Brit. AB1100N branco 127V',
        'Headset over-ear gamer JBL Quantum 100 JBL preto',
        'Fone De Ouvido Bluetooth 5.0',
        'Galaxy Book2 Intel Core I5',
        'Ar condicionado Philco Eco split inverter'
      ],
      datasets: [
        {
          backgroundColor: documentStyle.getPropertyValue('--blue-500'),
          borderColor: documentStyle.getPropertyValue('--blue-500'),
          data: [28, 48, 19, 86, 27, 90]
        }
      ],
    };

    this.options2 = {
      maintainAspectRatio: false,
      aspectRatio: 0.8,
      plugins: {
        legend: {
          labels: {
            color: textColor
          }
        }
      },
      scales: {
        x: {
          ticks: {
            color: textColorSecondary,
            font: {
              weight: 500
            }
          },
          grid: {
            color: surfaceBorder,
            drawBorder: false
          }
        },
        y: {
          ticks: {
            color: textColorSecondary
          },
          grid: {
            color: surfaceBorder,
            drawBorder: false
          }
        },
      },
    };
  }

  ngOnInit(): void {
    this.loadChart1();
    this.loadChart2();
  }

  openProdModal() {
    this.prodVisible = true;
  }

  closeProdModal() {
    this.prodVisible = false;
  }

  openCategModal() {
    this.categVisible = true;
  }

  closeCategModal() {
    this.categVisible = false;
  }

}

// === 'config'에 'setup'을 넣음  ===

// 차트 라벨
const labels = [
  '30',
  '31',
  '08/01',
  '02',
  '03',
  '04',
  '오늘'
];

const data = {
  labels: labels,
  datasets: [{
    label: '심박수 향상 활동량',
    backgroundColor: 'rgb(255, 99, 132)',
    borderColor: 'rgb(255, 99, 132)',
    data: [0, 10, 5, 2, 20, 30, 45],
  }]
};

// 챠트 설정
const config = {
  type: 'line',
  data,
  options: {

  }
};

// 차트 구동
var paiChart = new Chart(
  document.getElementById('paiChart'),
  config
);


   
// main.js

// 위치 데이터
const data = [
    {
      name: "본사",
      url: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3166.0443165322417!2d127.12348853047357!3d37.48328057233046!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357caf5f00000001%3A0x6296384ca4e09ab2!2z7ZmY7J247KCc7JW9KOyjvCk!5e0!3m2!1sko!2skr!4v1632813083863!5m2!1sko!2skr"
    },
    {
      name: "중앙연구소",
      url: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1587.0785911810294!2d127.04121215872193!3d37.29140840000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357b5b5e4e7b3a59%3A0x1dd25487acb6d098!2z6rK96riw64-E6rK97KCc6rO87ZWZ7KeE7Z2l7JuQIEd5ZW9uZ2dpZG8gQnVzaW5lc3MgJiBTY2llbmNlIEFjY2VsZXJhdG9y!5e0!3m2!1sko!2skr!4v1632813830411!5m2!1sko!2skr"
    },
    {
      name: "서울연구소",
      url: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3166.0443165322417!2d127.12348853047357!3d37.48328057233046!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357caf5f00000001%3A0x6296384ca4e09ab2!2z7ZmY7J247KCc7JW9KOyjvCk!5e0!3m2!1sko!2skr!4v1632813083863!5m2!1sko!2skr"
    },
    {
      name: "공장",
      url: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3185.6736117615537!2d127.24762101523291!3d37.01758216313258!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357b35abedbe184d%3A0x2f233a90b006df3b!2z6rK96riw64-EIOyViOyEseyLnCDslYjshLEz64-ZIOqzteuLqOuhnCA1MA!5e0!3m2!1sko!2skr!4v1632813890160!5m2!1sko!2skr"
    },
  ];
  
  // 지도 변경 함수(지도번호)
  function changeMap(num) {
    var name = data[num].name;
    var url = data[num].url;
  
    $('#map iframe').attr('src', url);
  

    $('.tab-group .btn').removeClass('active');
    // 버튼 active
    $('.tab-group .btn')
      .eq(num)
      .addClass('active');
  }
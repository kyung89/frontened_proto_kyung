import React, { useState, useEffect } from 'react';
import weather from "./weather.json";
import { Link } from "react-router-dom";

export default function RecoForecastForm() {
  const [address, setAddress] = useState('');
  const [tdata, setTdata] = useState([]);
  const [weatherMsg, setWeatherMsg] = useState("");
  const [sky, setSky] = useState({});

  const getFormatDate = (date) => {
     var year = date.getFullYear();              //yyyy
     var month = (1 + date.getMonth());          //M
     month = month >= 10 ? month : '0' + month;  //month 두자리로 저장
     var day = date.getDate();                   //d
     day = day >= 10 ? day : '0' + day;          //day 두자리로 저장
     return  year + '' + month + '' + day;       //'-' 추가하여 yyyy-mm-dd 형태 생성 가능
  }

  const getFormatHour = (date) => {
    const hours = date.getHours();

    if(hours.toString().length == 2) {
      return hours.toString() + "00";
    } else if(hours.toString().length == 1) {
      return "0" + hours.toString() + "00";
    }
  }

  const getData = async (url) => {
    const resp = await fetch(url);
    const data = await resp.json();

    setTdata(data.response.body.items.item);
  }

  const fetchAddress = async () => {

    navigator.geolocation.getCurrentPosition(async (position) => {
      //console.log("위도", position.coords.latitude);
      //console.log("경도", position.coords.longitude);    
    
      const apiKey = process.env.REACT_APP_GOOGLE_GEOCODING_API; // 여기에 발급받은 API 키를 입력하세요.
      const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${position.coords.latitude},${position.coords.longitude}&key=${apiKey}`;

      try {
        const response = await fetch(url);
        const data = await response.json();
        if (data.status === 'OK') {
          // 첫 번째 결과의 주소를 사용합니다.
          setAddress(data.results[0].formatted_address);
          const addr = await data.results[0].formatted_address.split(" ");

          //console.log(addr[0]); //대한민국
          //console.log(addr[1]); //부산광역시
          //console.log(addr[2]); //금정구
          //console.log(addr[3]); //장전동

          const filteredData = await weather.filter(item =>
            item["1단계"] == addr[1] &&
            item["2단계"] == addr[2]
          )[0];

          //console.log("격자 X", filteredData["격자 X"]);
          //console.log("격자 Y", filteredData["격자 Y"]);

          const dt = getFormatDate(new Date());

          let fcst_url = `https://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getVilageFcst?`;
          fcst_url = fcst_url + `serviceKey=${process.env.REACT_APP_FORECAST}&pageNo=1&numOfRows=1000&dataType=JSON`;
          fcst_url = fcst_url + `&base_date=${dt}&base_time=0500&nx=${filteredData["격자 X"]}&ny=${filteredData["격자 Y"]}`;

          //console.log(fcst_url);

          const result = getData(fcst_url);

        } else {
          setAddress('주소를 찾을 수 없습니다.');
        }
      } catch (error) {
        console.error('주소를 가져오는데 실패했습니다.', error);
        setAddress('주소를 가져오는데 실패했습니다.');
      }
    });
  };

  useEffect(() => {
    fetchAddress();
  }, []);

  useEffect(() => {
    //console.log(tdata);

    const hour = getFormatHour(new Date());
    const filteredTdata = tdata.filter(item => 
      item["fcstTime"] == hour
    );

    //console.log(filteredTdata);

    const sky = filteredTdata.filter(item => item["category"] == "SKY")[0];
    setSky(sky);
    
  }, [tdata]);

  useEffect(() => {

    //console.log(sky);


    if(typeof sky != "undefined" && Object.keys(sky).length > 0){
        let weatherMsg = "";
        //let weatherMsg = "현재 날씨는 ";
        if (sky["fcstValue"] == "1") {
          weatherMsg += "맑은 상태";
        } else if (sky["fcstValue"] == "2") {
          weatherMsg += "비가 오는 상태";
        } else if (sky["fcstValue"] == "3") {
          weatherMsg += "구름이 많은 상태";
        } else if (sky["fcstValue"] == "4") {
          weatherMsg += "흐린 상태";
        }
        setWeatherMsg(weatherMsg);
    }
    
  },  [sky])

  return (
    <div>
      <div><Link to="/recommend">이달의 추천작물: 샘플</Link></div>
      <br/>
      <br/>
      <div>
        <p>현재 주소: {address}</p>
        <p>현재 날씨: {weatherMsg}</p>
      </div>
    </div>
  );
}

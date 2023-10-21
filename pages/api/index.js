async function index(req, res) {


    const response = await fetch('https://best-booking-com-hotel.p.rapidapi.com/booking/best-accommodation', {
        method: 'GET',
        params: {
            cityName: 'Berlin',
            countryName: 'Germany'
        },
        headers: {
            'X-RapidAPI-Key': '3e52813330msh4d702c1d4a94b12p1d4fa0jsnfcc2257648f7',
            'X-RapidAPI-Host': 'best-booking-com-hotel.p.rapidapi.com'
        }
    })


    const data = await response.json();


    res.status(200).json({
        data: data,
    })
}


export default index;











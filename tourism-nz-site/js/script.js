// ==========================================================
// MAPKEY
// ==========================================================

// console.log(key); //key comes from external file mapKey.js
// var script = '<script src="https://maps.googleapis.com/maps/api/js?key=' + key + '&callback=initMap&libraries=&v=weekly" defer></script>'
// console.log (script);

// ==========================================================
  // NAVIGATION
// ==========================================================

$(document).ready(function(){
  $("#accommodation-options, #accommodation-details, #booking-confirmation").hide();

  $("#search-btn").click(function(){
    $('#homepage, #accommodation-details, #booking-confirmation').hide();
    $('#accommodation-options').show();
  });
  $("#details-btn").click(function(){
    $('#homepage, #accommodation-options, #booking-confirmation').hide();
    $('#accommodation-details').show();
  });
  $("#book-btn").click(function(){
    $('#homepage, #accommodation-options, #accommodation-details').hide();
    $('#booking-confirmation').show();
  });
  $("#back-btn__1").click(function(){
    $('#accommodation-details, #accommodation-options, #booking-confirmation').hide();
    $('#homepage').show();
  });
  $("#back-btn__2").click(function(){
    $('#homepage, #accommodation-details, #booking-confirmation').hide();
    $('#accommodation-options').show();
  });
  $("#other-booking").click(function(){
    $('#accommodation-details, #accommodation-options, #booking-confirmation').hide();
    $('#homepage').show();
  });
  });

// ==========================================================
  // ARRAY OF OBJECTS DECLARATION
// ==========================================================

var accommodation = [
  {
    id : 101,
    name : 'Adventure Queenstown Hostel',
    description : 'Welcome to Adventure Queenstown Hostel.' +
                  'Catering to independent travellers from around the world we offer mostly shared room accommodation and run in-house activities 5 nights a week to make it easy to meet fellow explorers from all around the world.' +
                  'There is a tour desk where our friendly staff can help you plan your activities, as well as a separate storage/locker room with secure bicycle parking and ski & snowboard storage. We offer loads of free stuff and even a simple laundry service.' +
                  'We’re a smaller hostel with a maximum capacity of just 43 people - the perfect number for keeping a family atmosphere which is still fun and vibrant.' +
                  'Being the most central accommodation in town, you’re just a minutes walk to everything. At night you can sleep soundly as there are no bars directly by us.',
    address : '36 Camp Street, Queenstown',
    price : 30,
    image : 'hostel-1.jpg',
    latitude : -45.031200,
    longitude : 168.660690,
    minGuests : 1,
    maxGuests : 1,
    minDays : 1,
    maxDays : 10
  },
  {
    id : 102,
    name : 'Queenstown Motel Apartments',
    description : 'Welcome to  Queenstown Motel Apartments.' +
                  'Conveniently located at 7-8 minutes walk from town centre, Queenstown Motel Apartments offer comfortable rooms with free guest wifi and free on-site parking. We are a self-rated 4-Star property. Our modern rooms include en-suite and kitchenette (fridge, microwave, tea/coffee making facilities, toaster, kettle and cutlery).' +
                  'Only a one minute walk to both the Millennium Hotel and the Copthorne Lakeview, we are a popular alternative for conference attendees. Skyline Gondola is 15 minute walk. Queenstown Airport is 10 minute drive and Remarkables Ski is approx. 35 minute drive.' +
                  'Weather you are travelling for work or recreation, Queenstown Motel Apartments offer a comfortable stay in the perfect spot. We look forward to hosting you.',
    address : '62 Frankton Road, Queenstown',
    price : 90,
    image : 'motel-2-4.jpg',
    latitude : -45.033850,
    longitude : 168.669430,
    minGuests : 2,
    maxGuests : 4,
    minDays : 3,
    maxDays : 10
  },
  {
    id : 103,
    name : 'The Rees Hotel',
    description : 'The Rees offers a variety of spacious and luxurious accommodation options including 60 Hotel rooms, 90 Apartments and five private, 3-bedroom, 3-bathroom Lakeside Residences, all with terraces, showcasing spectacular views across Lake Wakatipu to the alpine panorama of the Remarkable Mountain range.' +
                  'The many exceptional features at The Rees Hotel include a library of rare books and art, courtesy shuttle to/from Queenstown town centre, complimentary high-speed Wi-Fi, movies and local telephone calls, conference rooms, a fully-equipped gymnasium, secure undercover parking, electric car-charging station and its own private beach and wharf accessing jet-boat and water taxi services.' +
                  'Our team of experienced local and international staff pride themselves on delivering professional friendly service that consistently exceeds our guests’ expectations and is a hallmark of The Rees Hotel’s reputation.',
    address : '377 Frankton Road, Queenstown',
    price : 157,
    image : 'hotel-1-2.jpg',
    latitude : -45.028390,
    longitude : 168.687880,
    minGuests : 1,
    maxGuests : 2,
    minDays : 1,
    maxDays : 5
  },
  {
    id : 104,
    name : 'Queenstown House Homestay',
    description : "A newly built single-family home within South Island's finest golf course, Jackpoint Complex, a neighborhood used for local residential use rather than tourist use." +
                  'Jackpoint Clubhouse and golf course are a five-minute walk away, followed by dinner and golf practice.' +
                  'Approximately 10 minutes by car from the airport, 18 minutes from Queenstown, 30 minutes from Aerotown, 25 minutes from Milbrook Resort, 25 minutes from Remarkable Ski Area, 35 minutes from Coronet Pic Ski Area and Remarkable Shopping Center',
    address : '25 Kawarau Place, Queenstown',
    price : 240,
    image : 'house-1-4.jpg',
    latitude : -45.029890,
    longitude : 168.740710,
    minGuests : 1,
    maxGuests : 4,
    minDays : 2,
    maxDays : 15
  }
];

// ==========================================================
// DATEPICKERS
// ==========================================================

$('#check-in').datepicker({
   dateFormat : 'dd-mm-yy',
   changeMonth : true,
   minDate :new Date(),
   maxDate : '+1y',
   onSelect : function(date){
     var selectDate = new Date(date);
     var msecInADay  = 86400000;
     var stDate = new Date(selectDate.getTime() + msecInADay);

     $('#endDate').datepicker('option', 'minDate', stDate);
     var enDate = new Date(selectDate.getTime() + 10 * msecInADay);

     $('#endDate').datepicker('option', 'maxDate', enDate);
   }
 });

 $('#check-out').datepicker({
   dateFormat : 'dd-mm-yy',
   changeMonth : true,
   minDate :new Date(),
   maxDate : '+15d'
 });

 $('#calculateDays').click(function(){
   dateDiff();
 });

function dateDiff(){
 var start = $(startDate).datepicker('getDate');
 var end = $(endDate).datepicker('getDate');

 var days = (end-start)/1000/60/60/24; //to get human readable days
 $('#days').val(days);
}

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
  $("#accommodation-options, #homepage, #booking-confirmation").hide();
    // $("#homepage").show();
  $("#search-btn").click(function(){
    $('#homepage, #accommodation-details, #booking-confirmation').hide();
    $('#accommodation-options').show();
  });
  $("#footer").click(function(){
    $('#homepage, #accommodation-options, #booking-confirmation').hide();
    $('#accommodation-details').show();
    $('#footer').hide();
  });
  $("#book-btn").click(function(){
    $('#homepage, #accommodation-options, #accommodation-details').hide();
    $('#booking-confirmation, #footer').show();
  });
  $("#back-btn__1").click(function(){
    $('#accommodation-details, #accommodation-options, #booking-confirmation').hide();
    $('#homepage').show();
    $('#cardResult').empty();
  });
  $("#back-btn__2").click(function(){
    $('#homepage, #accommodation-details, #booking-confirmation').hide();
    $('#accommodation-options, #footer').show();
  });
  $("#other-booking").click(function(){
    $('#accommodation-details, #accommodation-options, #booking-confirmation').hide();
    $('#homepage').show();
  });

  // $('body').append(script);

}); //document ready

// GOOGLE MAP
function initMap(){
  // console.log('map');
  //callilng map from directions
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 15,
      center: { lat: -45.031200, lng: 168.660690 },
      mapTypeId : 'roadmap'
    });//map
    new google.maps.Marker({
      position: { lat: -45.031200, lng: 168.660690 },
      map,
      title: "Hello World!",
    });
}


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
    bgImg : 'bgImg1',
    image : 'hostel-1.jpg',
    carousel1 : 'hostel-carousel-1.jpg',
    carousel2 : 'hostel-carousel-2.jpg',
    carousel3 : 'hostel-carousel-3.jpg',
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
    bgImg : 'bgImg2',
    image : 'motel-2-4.jpg',
    carousel1 : 'motel-carousel-1.jpg',
    carousel2 : 'motel-carousel-2.jpg',
    carousel3 : 'motel-carousel-3.jpg',
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
    bgImg : 'bgImg3',
    image : 'hotel-1-2.jpg',
    carousel1 : 'hotel-carousel-1.jpg',
    carousel2 : 'hotel-carousel-2.jpg',
    carousel3 : 'hotel-carousel-3.jpg',
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
    bgImg : 'bgImg4',
    image : 'house-1-4.jpg',
    carousel1 : 'house-carousel-1.jpg',
    carousel2 : 'house-carousel-2.jpg',
    carousel3 : 'house-carousel-3.jpg',
    latitude : -45.029890,
    longitude : 168.740710,
    minGuests : 1,
    maxGuests : 4,
    minDays : 2,
    maxDays : 15
  }
];



// ==========================================================
// Display cards
// ==========================================================

function displayCards(j){
  //access properties of objects using index number
  $('#cardResult').append( '<div class="p-3 w-50">' +
'              <div class="card border-0 rounded float-left w-100 h-100">' +
'                <div class="card-body rounded w-100 text-white p-0 bgImg" id="' + accommodation[j].bgImg + '">' +
'                 <div class="h-50 clearfix d-block w-100">' +
'                  <div class="card-textbox w-100 p-2 rounded-bottom clearfix">' +
'                    <h5 class="card-title">' + accommodation[j].name + '</h5>' +
'                    <p class="card-text">' + accommodation[j].address + '</p>' +
'                    <div class="details-btn__container float-left" id="' + accommodation[j].id + '">' +
'                      <p class="btn btn-primary text-white rounded text-center details-btn">Details</p>' +
'                    </div>' +
'                    <div class="price-textbox float-right">' +
'                      <p class="pt-1">$' + accommodation[j].price + '/night</p>' +
'                    </div>' +
'                   </div>' +
'                  </div>' +
'                </div>' +
'              </div>' +
'            </div>'
                  ); //append ends here
   displayDetails();
  } //displayCards


  function displayDetails() {
    // console.log('modal');
    $('.details-btn__container').click(function(){
        console.log(this.id);
        var i;
        for (i = 0 ; i < accommodation.length ; i++) {
          if (parseInt(this.id) === accommodation.id) {
            console.log(accommodation.name);
            callModal(accommodation.id);
          }
        }
    });
  }

  function callModal() {
      // place modal here
  }
// ==========================================================
// DATEPICKERS
// ==========================================================
// var todayDate =new Date();
//
// var dd = String(todayDate.getDate()).padStart(2, '0');
// var mm = String(todayDate.getMonth() + 1).padStart(2, '0'); //January is 0!
// var yyyy = todayDate.getFullYear();

// todayDate = dd + '-' + mm + '-' + yyyy;
// $('#checkIn').val(new Date());
// $('#checkOut').val(todayDate);

var stDate;
var enDate

$('#checkIn').datepicker({
   dateFormat : 'dd-mm-yy',
   changeMonth : true,
   minDate :new Date(),
   maxDate : '+1y',
   onSelect : function(date){
     // var selectDate = new Date(date);
     // var msecInADay  = 86400000;
     // var stDate = new Date(selectDate.getTime() + msecInADay);

     // convert date
     // var dd = String(selectDate.getDate()).padStart(2, '0');
     // var mm = String(selectDate.getMonth() + 1).padStart(2, '0'); //January is 0!
     // var yyyy = selectDate.getFullYear();
     // console.log(dd + '-' + mm + '-' + yyyy);
     // $('#checkIn').val(dd + '-' + mm + '-' + yyyy)
    stDate = $(this).datepicker('getDate');
    console.log(stDate);

     // $('#checkOut').datepicker('option', 'minDate', stDate);
     // var checkOut = new Date(selectDate.getTime() + 15 * msecInADay);
     // console.log(checkOut);
     // $('#checkOut').datepicker('option', 'maxDate', checkOut);
     // console.log(checkOut);
   }
 });

 $('#checkOut').datepicker({
   dateFormat : 'dd-mm-yy',
   changeMonth : true,
   minDate :new Date(),
   maxDate : '+15d',
   onSelect : function(){
   enDate = $(this).datepicker('getDate');
   // var selectDate = new Date(date);
   // console.log(selectDate);
   // var msecInADay  = 86400000;
   // var enDate = new Date(selectDate.getTime());
   console.log(enDate);
   // // convert date
   // var dd = String(selectDate.getDate()).padStart(2, '0');
   // var mm = String(selectDate.getMonth() + 1).padStart(2, '0'); //January is 0!
   // var yyyy = selectDate.getFullYear();
   // console.log(dd + '-' + mm + '-' + yyyy);
   // $('#checkOut').val(dd + '-' + mm + '-' + yyyy)
   // dateDiff(enDate)
 }
 });

 document.getElementById('search-btn').addEventListener('click', function(){
 // console.log('hello');
 var days = Math.ceil((enDate - stDate) / (1000 * 60 * 60 * 24)) ;
      console.log(days);
 // dateDiff();


  var guestAmount = document.getElementById('guests').value;
  // console.log(typeof guestAmount);
  var guestAmount = parseInt(guestAmount)
  // console.log(guestAmount);
  // console.log(typeof guestAmount);
  // console.log(guestAmount);


  document.getElementById('checkInResult').innerHTML = checkIn.value;
  document.getElementById('checkOutResult').innerHTML = checkOut.value;
  document.getElementById('guestsResult').innerHTML = guestAmount + ' ' + 'Guests';
  document.getElementById('daysResult').innerHTML = days + ' ' + 'Nights';


  // CARD LOOP
  for (var i = 0 ; i < accommodation.length ; i++) {
    if (((days <= accommodation[i].maxDays) && (days >= accommodation[i].minDays)) && ((guestAmount <= accommodation[i].maxGuests) && (guestAmount >= accommodation[i].minGuests))) {
      // console.log('Display Card');
      // console.log(accommodation[i].name);
      displayCards(i)
    } else if (days === 0) {
      alert('Please select a check in and check out date') //replace these with on screen messages
    } else {
      // alert('No results. Please select different dates and try again.') //replace these with on screen messages
    }
  }


// MODAL LOOP
  // document.getElementsByClassName('details-btn__container)[0].addEventListener('click', function(){
    // for (var i = 0 ; i < accommodation.length ; i++) {
    //   if (accommodation[i].id === accommodation[i].id) {
    //     console.log(accommodation[i].id);
    //     console.log('Open Modal');
    //   }
    // }
  // });

  // TOTAL PRICE CALCULATION

  function findPrice() {

  }

  var price = 90;
  console.log(price);

  var subtotal = calculateSubtotal(price, guestAmount, days)
  console.log(subtotal);

  var gst = calculateGst(subtotal);
  console.log(gst);

  var total = subtotal + gst;
  console.log(total);

  // Calcualte Subtotal
  function calculateSubtotal(a, b, c) {
    var subtotal = a * b * c;
    return subtotal
  }

  // Calcualte GST
  function calculateGst(a) {

	var gst = a * 0.15;
  return gst
  console.log(gst);
  }
  // PUSH PRICE TO DOM
  document.getElementById('subtotalResult').innerHTML = '$' + subtotal;
  document.getElementById('gstResult').innerHTML = '$' + gst;
  document.getElementById('totalResult').innerHTML = '$' + total;

  // MEAL PRICE
  var breakfast = 20;
  var lunch = 25;
  var dinner = 35;




 var breakfastSelected = document.getElementById('inlineCheckbox1').checked;
 var lunchSelected = document.getElementById('inlineCheckbox2').checked;
 var dinnerSelected = document.getElementById('inlineCheckbox3').checked;

 mealSelected();

function mealSelected () {
  if (breakfastSelected === true) {
    return breakfast;
    console.log('breakfast');
  } else if (lunchSelected === true) {
    return lunch;
    console.log('lunch');
  } else if (dinnerSelected === true) {
    return dinner;
    console.log('dinner');
  }
}


 // console.log(checkedValue);


}); //search button







// EMAIL CONFIRMATION
document.getElementById('send-btn').addEventListener('click', function(){
  var email = document.getElementById('emailInput').value

  ValidateEmail(email);

  function ValidateEmail(inputText)
  {
  var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if(emailInput.value.match(mailformat))
  {
  document.getElementById('emailConfirmation').innerHTML = 'Itinerary sent!'
  }
  else
  {
  document.getElementById('emailConfirmation').innerHTML = "<p style='color:red'>Please input a valid email address</p>"
  }
  }


});

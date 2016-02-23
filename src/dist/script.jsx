'use strict';

/*=================GLOBAL DECLARATION SECTION ===============*/
var keyList=['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var AllowedTimeDuration=10;

var words=[
  {
    answer:"MONKEY", 
    question:"M_NK_Y"
  },
  {
    answer:"BANANA",
    question:"BANA_A"
  },
  {
    answer:"APPLE",
    question:"APP_E"
  },
  {
    answer:"ORANGE",
    question:"ORA_GE"
  },
  {
    answer:"LION",
    question:"L_ON"
  },
    {
    answer:"BOOK",
    question:"BO_K"
  },
  {
    answer:"COCONUT",
    question:"COCON_T"
  },
    {
    answer:"TEACHER",
    question:"TEAC__R"
  },
  {
    answer:"DOCTOR",
    question:"DO_TOR"
  },
   {
    answer:"FRIEND",
    question:"FRI_ND"
  },
  {
    answer:"BROTHER",
    question:"BR_THER"
  },
   {
    answer:"DOG",
    question:"D_G"
  },
   {
    answer:"FOOD",
    question:"FO_D"
  },
   {
    answer:"WATER",
    question:"WAT_R"
  },
  {
    answer:"HOUSE",
    question:"HOUS_"
  },
   {
    answer:"ELEPHANT",
    question:"ELEPH_NT"
  },
  {
    answer:"MANGO",
    question:"MA_GO"
  },
    {
    answer:"SCHOOL",
    question:"SCHO_L"
  },
    {
    answer:"PEOPLE",
    question:"PE_PLE"
  },
     {
    answer:"PENCIL",
    question:"P_NCIL"
  },
];
 var questions=[];
var RANDOM_LIMIT=words.length-1;




 ReactDOM.render(<MainApp/>,document.getElementById("main-app"));

    
$(document).ready(function(){
  $('#fullpage').fullpage({
    anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'fifthPage','#sixthPage'],
    menu: '#menu'
  });
});
///////////MAIN CLICKS ON RESUME
$('#edu').click(function() {
    $('.education').toggle();
});
$('#comm').click(function() {
    $('.community').toggle();
});
$('#exp').click(function() {
    $('.experience').toggle();
});

////////////////INDIVIDUAL CLICKS ON EXPERIENCE ---- ESD
$('#esdSocial').click(function() {
    $('#esd1').toggle();
});
$('#esdWeb').click(function() {
    $('#esd2').toggle();
});
$('#esdPr').click(function() {
    $('#esd3').toggle();
});
$('#esdTech').click(function() {
    $('#esd4').toggle();
});
$('#esdDesign').click(function() {
    $('#esd5').toggle();
});

///////////////CLICKS ON ART OF CREATING
$('#oohSocial').click(function() {
    $('#ooh1').toggle();
});
$('#oohWeb').click(function() {
    $('#ooh2').toggle();
});
$('#oohPr').click(function() {
    $('#ooh3').toggle();
});
$('#oohEvents').click(function() {
    $('#ooh4').toggle();
});
$('#oohDesign').click(function() {
    $('#ooh5').toggle();
});
$('#oohSales').click(function() {
    $('#ooh6').toggle();
});
//////////////////////CLICKS FOR GOCO

$('#gocoEvents').click(function() {
    $('#goco2').toggle();
});
$('#gocoDesign').click(function() {
    $('#goco3').toggle();
});
$('#gocoLead').click(function() {
    $('#goco4').toggle();
});
//////////TO CLOSE AND OPEN ALL
$('#closeOoh').click(function() {
  $('#ooh6').toggle();
  $('#ooh5').toggle();
  $('#ooh4').toggle();
  $('#ooh3').toggle();
  $('#ooh2').toggle();
  $('#ooh1').toggle();
});



$('#closeGoco').click(function() {
  $('#goco2').toggle();
  $('#goco3').toggle();
  $('#goco4').toggle();
});


$('#closeEsd').click(function() {
  $('#esd5').toggle();
  $('#esd4').toggle();
  $('#esd3').toggle();
  $('#esd2').toggle();
  $('#esd1').toggle();
});

// Created by iWeb 3.0.4 local-build-20140825

function createMediaStream_id3()
{return IWCreatePhotocast("file://localhost/Users/Katherine/UM_SCUBA2/Photos/Pages/Ginnie_Springs_files/rss.xml",true);}
function initializeMediaStream_id3()
{createMediaStream_id3().load('file://localhost/Users/Katherine/UM_SCUBA2/Photos/Pages',function(imageStream)
{var entryCount=imageStream.length;var headerView=widgets['widget0'];headerView.setPreferenceForKey(imageStream.length,'entryCount');NotificationCenter.postNotification(new IWNotification('SetPage','id3',{pageIndex:0}));});}
function layoutMediaGrid_id3(range)
{createMediaStream_id3().load('file://localhost/Users/Katherine/UM_SCUBA2/Photos/Pages',function(imageStream)
{if(range==null)
{range=new IWRange(0,imageStream.length);}
IWLayoutPhotoGrid('id3',new IWPhotoGridLayout(3,new IWSize(233,233),new IWSize(233,32),new IWSize(233,280),27,27,0,new IWSize(24,26)),new IWPhotoFrame([IWCreateImage('Ginnie_Springs_files/Modern_C_TL.png'),IWCreateImage('Ginnie_Springs_files/Modern_S_T.png'),IWCreateImage('Ginnie_Springs_files/Modern_C_TR.png'),IWCreateImage('Ginnie_Springs_files/Modern_S_R.png'),IWCreateImage('Ginnie_Springs_files/Modern_C_BR.png'),IWCreateImage('Ginnie_Springs_files/Modern_S_B.png'),IWCreateImage('Ginnie_Springs_files/Modern_C_BL.png'),IWCreateImage('Ginnie_Springs_files/Modern_S_L.png')],null,2,0.700000,0.000000,0.000000,0.000000,0.000000,17.000000,17.000000,17.000000,20.000000,40.000000,40.000000,40.000000,240.000000,null,null,null,0.100000),imageStream,range,null,null,1.000000,{backgroundColor:'rgb(0, 0, 0)',reflectionHeight:100,reflectionOffset:2,captionHeight:100,fullScreen:0,transitionIndex:2},'../../Media/slideshow.html','widget0','widget1','widget2')});}
function relayoutMediaGrid_id3(notification)
{var userInfo=notification.userInfo();var range=userInfo['range'];layoutMediaGrid_id3(range);}
function onStubPage()
{var args=window.location.href.toQueryParams();parent.IWMediaStreamPhotoPageSetMediaStream(createMediaStream_id3(),args.id);}
if(window.stubPage)
{onStubPage();}
setTransparentGifURL('../../Media/transparent.gif');function hostedOnDM()
{return false;}
function onPageLoad()
{IWRegisterNamedImage('comment overlay','../../Media/Photo-Overlay-Comment.png')
IWRegisterNamedImage('movie overlay','../../Media/Photo-Overlay-Movie.png')
loadMozillaCSS('Ginnie_Springs_files/Ginnie_SpringsMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');adjustLineHeightIfTooBig('id2');adjustFontSizeIfTooBig('id2');NotificationCenter.addObserver(null,relayoutMediaGrid_id3,'RangeChanged','id3')
adjustLineHeightIfTooBig('id4');adjustFontSizeIfTooBig('id4');fixAllIEPNGs('../../Media/transparent.gif');Widget.onload();fixupIECSS3Opacity('id5');initializeMediaStream_id3()
performPostEffectsFixups()}
function onPageUnload()
{Widget.onunload();}

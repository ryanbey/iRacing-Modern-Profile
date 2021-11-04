// Remove old header
document.querySelector('.container').remove();

// Below is all in a tr element, figure out how to delete that
document.querySelector('.banner_img').remove();
document.querySelector('#banner_img').remove();
document.querySelector('#racepanel_wrapper').remove();

// Remove sidebar ads
document.querySelectorAll('.siteBGElement').forEach(e => e.remove());

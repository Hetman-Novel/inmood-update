document.addEventListener("DOMContentLoaded", function() {

   if (document.querySelector('.page-3d-models')) {
      let profileMenuItems = document.querySelectorAll('.page-3d-models__name');
      profileMenuItems.forEach(function(profileMenuItem) {
         profileMenuItem.addEventListener('click', function() {
            profileMenuItems.forEach(function(profileMenuItem) {
               profileMenuItem.classList.remove('active');
            });
            this.classList.add('active');
            var id = this.getAttribute('data-id-menu');
            var ProfileItemBlocks = document.querySelectorAll('.page-3d-models__blockContent');
            ProfileItemBlocks.forEach(function(ProfileItemBlock) {
               if (ProfileItemBlock.id === id) {
                  ProfileItemBlock.classList.add('block-active');
               } else {
                  ProfileItemBlock.classList.remove('block-active');
               }
            });
         });
      });
   }
})
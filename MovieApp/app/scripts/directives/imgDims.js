movieApp.directive('imgDim', function () {
    return {
        restrict: 'A',
        scope:{},
        link: function (scope, element, attr) {
            element.on('load', function () {             
                    var imgHeight = $('#img-0').height()
                    console.log($('#img-0').height())
                    console.log(window.screen.availHeight)
                    $(this).height(imgHeight)               
            })
        }
    }
})
/*
*author Jackwoo
*QQ:359513995
 */
var JackTest = window.JackTest || {};

JackTest = (function() {
    //选择星星
    function _SelectRaty(obj){
        this.dom = obj.dom;
        this.scoreName = obj.scoreName;
        this.init();
    }
    _SelectRaty.prototype.init = function(){
        var _this = this;
        $(_this.dom).live({
            mouseover : function () {
                var curStarPos = $(this).index() + 1;
                var curStarIndex = $(this).index();
                $(_this.dom+":gt("+curStarIndex+")").attr('src','/static/images/star-off.png');
                $(_this.dom+":lt("+curStarPos+")").attr('src','/static/images/star-on.png');
            },
            mouseout : function () {
                var curScoreIndex = $(_this.scoreName).val() - 1;
                var curScore = $(_this.scoreName).val();
                if (curScore == 0){
                    $(_this.dom).attr('src','/static/images/star-off.png');
                }else{
                    console.log(curScore);
                    $(_this.dom+":gt("+curScoreIndex+")").attr('src','/static/images/star-off.png');
                    $(_this.dom+":lt("+curScore+")").attr('src','/static/images/star-on.png');
                }
            },
            click : function () {
                var curStarPos = $(this).index() + 1;
                $(_this.scoreName).val(curStarPos);
            }
        })
    }
    return {
        SelectRaty :_SelectRaty,
        init:function() {
            $(document).ready(function() {
                new JackTest.SelectRaty({
                    dom:"#skill0 img",
                    scoreName : "#skill0-score"
                });
            });
        }
    }
})();
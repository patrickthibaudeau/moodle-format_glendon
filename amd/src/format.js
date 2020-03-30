/**
 * Glendon Course Format: Displays course front page in a grid format
 * and the content in a tabbed format
 * @package format_glendon
 * @copyright 2018 Glendon College - York University
 * @author Patrick Thibaudeau
 * @license http://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 */
define(['jquery', 'jqueryui'], function ($, jqui) {
    "use strict";

    var wwwroot = M.cfg.wwwroot;

    /**
     * This function is used to add highlighting for the active breadcrump item 
     * Initialising.
     */
    function initFormat() {

        $('#course-menu-toggle').click(function () {
            toggleCourseMenu();
        });
    }

    return {
        init: function () {
            initFormat();
        }
    };

    function toggleCourseMenu() {
        var courseMenu = $('#course-menu-toggle');

        if (courseMenu.hasClass('active')) {
            $('#format-glendon-content-left').toggle('slide');
            courseMenu.removeClass('active'); 
            $('.fa-window-minimize').addClass('fa-window-maximize');
            $('.fa-window-minimize').removeClass('fa-window-minimize');
            $('#format-glendon-content-right').addClass('col-md-12');
            
            
        } else {
            courseMenu.addClass('active');
            $('.fa-window-maximize').addClass('fa-window-minimize');
            $('.fa-window-maximize').removeClass('fa-window-maximize');
            $('#format-glendon-content-left').toggle('slide');
            $('#format-glendon-content-right').removeClass('col-md-12');
            $('#format-glendon-content-right').addClass('col-md-8');
            
        }
    }

});
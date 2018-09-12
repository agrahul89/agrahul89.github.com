$(document).ready(function() {
    // add any custom jquery script in here
    addToSkills(languages);
    addToSkills(frameworks);
    addToSkills(testTools);
    addToSkills(buildTools);
    enablePopover(); // enable bootstrap popover
    if(showPopup()) {
        $('#under-construction').modal({
            backdrop: 'static'
        });
    }

    $('#contact-form').on("submit", function(event){
        event.preventDefault();
        let mailto = $('#mail-id').next('label').text();
        let mailSub= 'Can+we+have+a+meeting%3F';

        let name = $('#firstname').val() + ' ' + $('#lastname').val();
        let phone = $('#phone').val();
        let email = $('#email').val();
        let comments= $('#comments').val();
        let mailbody = `${comments}\n-- -- -- -- -- -- --\n${name}\n${phone}\n${email}`;

        let url = 'mailto:' + mailto + '?subject=' + mailSub + '&body=' + encodeURI(mailbody);
        let anchor = document.createElement('a');
        anchor.href = url;
        anchor.target = '_blank';
        anchor.click();
    });
});

function addToSkills(skillGroup) {
    let skillElements = [];
    skillGroup.skills.forEach(
        skill => skillElements.push(skill.id === 'separator'? (skill.hidden ? '' : '<hr>') : createSkillElement(skill))
    );
    skillElements.forEach(skill => $('ul#'+skillGroup.id).append(skill));
}

function capitalize(text) {
    return text ? text.replace(/(^|\s)\S/g, letter => letter.toUpperCase()) : '';
}

function createSkillElement(skill) {
    let title = skill.title ? skill.title : capitalize(skill.id);
    let proficiency = document.createElement('div');
    $(proficiency).addClass(skill.proficiency).attr('title', capitalize(skill.proficiency));

    let proficiencyContainer = document.createElement('div');
    $(proficiencyContainer).addClass('proficiency').append(proficiency);

    let icon = document.createElement('img');
    $(icon).attr('src', skill.icon).attr('title', title);

    let iconContainer = document.createElement('div');
    $(iconContainer).addClass('icon').append(icon);

    let anchor = document.createElement('a');
    $(anchor).attr('href', skill.ref).attr('target', '_blank');
    $(anchor).append(iconContainer);

    let skillElement = document.createElement('li');
    $(skillElement).attr('id', skill.id).attr('data-toggle', 'popover')
        .attr('title', capitalize(title).concat(' | ').concat(capitalize(skill.proficiency)))
        .attr('data-content', skill.content);
    $(skillElement).append(anchor).append(proficiencyContainer);

    return skill.hidden ? '' : skillElement;
}

function enablePopover() {
    let popover = $('[data-toggle="popover"]').popover({
        placement: 'top',
        template: '<div class="popover" role="tooltip">'
                +   '<div class="arrow"></div>'
                +   '<h3 class="popover-header"></h3>'
                +   '<div class="popover-body"></div>'
                + '</div>',
        trigger  : 'hover focus'
    });
    // For mobile devices where hover does not work
    $('ul.languages > li').focusout(popover.popover('hide'));
    // For devices with hover effect
    $('ul.languages > li').mouseout(popover.popover('hide'));
    // For devices with hover effect in IE
    $('ul.languages > li').mouseleave(popover.popover('hide'));
}

function showPopup() {
    let show = true;
    let lastShownAt = localStorage.getItem('lastShown');
    let now = Date.now();
    if (lastShownAt) {
        show = now - lastShownAt > 24*60*60*1000;
    }
    localStorage.setItem('lastShown', now);
    return show;
}

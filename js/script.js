$(document).ready(function() {
    // add any custom jquery script in here
    addToSkills(languages);
    addToSkills(frameworks);
    addToSkills(testTools);
    addToSkills(buildTools);
    enablePopover(); // enable bootstrap popover
    $('#under-construction').modal({
        backdrop: 'static'
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

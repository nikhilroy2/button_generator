const change_Obj = [
    {
        name: 'button_text',
        attr: '[data-name="button_text"]'
    },
    {
        name: 'background_image',
        attr: '[data-name="background_image"]'
    },
    {
        name: 'background_color',
        attr: '[data-name="background_color"]'

    },
    {
        name: 'font_color',
        attr: '[data-name="font_color"]'

    },
    {
        name: 'button_width',
        attr: '[data-name="button_width"]'

    },
    {
        name: 'button_height',
        attr: '[data-name="button_height"]'

    },
    {
        name: 'border_color',
        attr: '[data-name="border_color"]'

    },
    {
        name: 'border_radius',
        attr: '[data-name="border_radius"]'

    },
    {
        name: 'button_url',
        attr: '[data-name="button_url"]'

    }
]
let btn_styleSheet = '';
change_Obj.forEach((v, i) => {
    $(`[data-name="${v.name}"]`).on('input', function () {
        switch ($(this).attr('data-name')) {
            case 'button_text':
                Output_code($(this).val());
                $(this).attr('data-value', $(this).val());
                break;
            case 'background_image':
                Output_code($(change_Obj[0].attr).val(), $(this).val());
                $(this).attr('data-value', $(this).val());

                break;
            case 'background_color':
                Output_code($(change_Obj[0].attr).val(), $(change_Obj[1].attr).val(),
                    $(this).val());
                $(this).attr('data-value', $(this).val());

                break;
            case 'font_color':
                Output_code($(change_Obj[0].attr).val(), $(change_Obj[1].attr).val(), $(change_Obj[2].attr).val(),
                    $(this).val());
                $(this).attr('data-value', $(this).val());

                break;
            case 'button_width':
                Output_code($(change_Obj[0].attr).val(), $(change_Obj[1].attr).val(), $(change_Obj[2].attr).val(), $(change_Obj[3].attr).val(),
                    $(this).val());
                $(this).attr('data-value', $(this).val());

                break;
            case 'button_height':
                Output_code($(change_Obj[0].attr).val(), $(change_Obj[1].attr).val(), $(change_Obj[2].attr).val(), $(change_Obj[3].attr).val(), $(change_Obj[4].attr).val(),
                    $(this).val());
                $(this).attr('data-value', $(this).val());

                break;
            case 'border_color':
                Output_code($(change_Obj[0].attr).val(), $(change_Obj[1].attr).val(), $(change_Obj[2].attr).val(), $(change_Obj[3].attr).val(), $(change_Obj[4].attr).val(), $(change_Obj[5].attr).val(),
                    $(this).val());
                $(this).attr('data-value', $(this).val());

                break;
            case 'border_radius':
                Output_code($(change_Obj[0].attr).val(), $(change_Obj[1].attr).val(), $(change_Obj[2].attr).val(), $(change_Obj[3].attr).val(), $(change_Obj[4].attr).val(), $(change_Obj[5].attr).val(), $(change_Obj[6].attr).val(),
                    $(this).val());
                $(this).attr('data-value', $(this).val());

                break;
            case 'button_url':
                Output_code($(change_Obj[0].attr).val(), $(change_Obj[1].attr).val(), $(change_Obj[2].attr).val(), $(change_Obj[3].attr).val(), $(change_Obj[4].attr).val(), $(change_Obj[5].attr).val(), $(change_Obj[6].attr).val(), $(change_Obj[7].attr).val(),
                    $(this).val());
                $(this).attr('data-value', $(this).val());

                break;
            default:
                console.log("not found")
        }
    })
})
function Output_code(
    btn_text = $(change_Obj[0].attr).val(),
    btn_img = $(change_Obj[1].attr).val(),
    btn_bgColor = $(change_Obj[2].attr).val(),
    btn_fontColor = $(change_Obj[3].attr).val(),
    btn_width = $(change_Obj[4].attr).val(),
    btn_height = $(change_Obj[5].attr).val(),
    btn_borderColor = $(change_Obj[6].attr).val(),
    btn_borderRadius = $(change_Obj[7].attr).val(),
    btn_url = $(change_Obj[8].attr).val()
) {

    let output_code = '';

    if (btn_text === 'sample') {
        output_code =
            `
        <a href="${btn_url}" style='${btn_bgColor}'> ${btn_img}  </a>
        `;

    } else {
        output_code =
            `
        <div>
        <!--[if mso]>
	          <v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="https://" style="height:${btn_height}px;v-text-anchor:middle;width:${btn_width}px;" arcsize="0%" strokecolor="${btn_borderColor}" fill="t">
            <v:fill type="tile" src="${btn_img}" color="${btn_bgColor}" />
               <w:anchorlock/>
             <center style="color:${btn_fontColor};font-family:sans-serif;font-size:13px;font-weight:bold;">${btn_text}</center>
                </v:roundrect>
            <![endif]-->
        <a href="${btn_url}" style='
        background-image: url(${btn_img});
        background-repeat: no-repeat;
        background-color: ${btn_bgColor};
        color: ${btn_fontColor};
        width: ${btn_width}px;
        height: ${btn_height}px;
        border: 1px solid ${btn_borderColor};
        border-radius: ${btn_borderRadius}px;
        text-align: center;
        line-height: ${btn_height}px;
        text-decoration: none;
        display: inline-block;
        
        '> ${btn_text}  </a>
        </div>
        `;
    }
    $('.output_code code').text(output_code);
    $('.button_output_wrapper').html(output_code)

}

Output_code()

// ......... btn_copy......

function CopyText() {
    let newInput = document.createElement('input');
    newInput.setAttribute('value', $('.output_code code').text().replace(/\s\s+/g, ' '))
    document.body.appendChild(newInput)
    newInput.select();

    newInput.setSelectionRange(0, 99999);
    document.execCommand("copy");


    newInput.remove()
}

// background change

function bgChange(val, next) {
    next.value = val.value;
    Output_code()
}
// color change

function colorChange(val, next) {
    next.value = val.value;
    Output_code()
}

// borderColor change

function borderColor(val, next) {
    next.value = val.value;
    Output_code()
}

// checkbox function

function checkFun(val, put) {
    let getValue = $(`[data-name="${put}"]`).attr('data-value');
    if (val.checked) {
        $(`[data-name="${put}"]`).val(getValue)
    } else {
        $(`[data-name=${put}]`).val('')
    }
    Output_code()

}
// input focus

function InputFocus(val, check) {
    val.value = $(val).attr('data-value')
    $(`#${check}`).prop('checked', true)
}

// ... clickColor Function

function clickColor(val, check) {
    $(`#${check}`).prop('checked', true);
    $(`[data-name=${check}]`).val($(val).val());
    Output_code()
}

// ...... smaple button... 

function SampleBtn(val) {
    // let output_code =
    //     `
    //     <a href="" style=''> ${val.innerHTML}  </a>
    //     `;

    // $('.output_code code').text(output_code)
    Output_code('sample', val.innerHTML, val.getAttribute('style'))
}



// screenshot generator working......



let canvas = document.getElementById('screenshot_canvas'),
context = canvas.getContext('2d');

make_base();

function make_base()
{
  base_image = new Image();
  base_image.src = 'https://growtheme.com/mailchimp-tutorial/img/Confirmation-Template.png';
  context.drawImage(base_image, 0, 0);
  TextFill()
}

function TextFill(){
    context.font = "25px Arial";

    let fromName = ''
    context.fillText(fromName, 600, 323);

    $('#inputFromName').on('input', (e)=> {
        fromName = e.target.value;
        context.fillText(fromName, 600, 323);
    })
    let confEmail = ''
    context.fillText(confEmail, 955, 323);
    $('#inputFromEmail').on('input', (e)=> {
        confEmail = e.target.value;
        context.fillText(confEmail, 955, 323);
    })
    $('#inputFromEmail2').on('input', e=> {
        confEmail = e.target.value;
        context.fillText(confEmail, 1455, 323);
    })


    
}

// ........... Range slider....... section

function rangeInput(val){
    const min = val.min ? val.min : 0;
    const max = val.max ? val.max : 100;
    const newVal = Number(((val.value - min) * 100) / (max - min));
    //console.log(newVal)
    $('[data-range="subscribers"]').css({
        left: `calc(${newVal}% + (${30 - newVal * 0.25}px))`
    }).html(`${val.value} subscribers`);


    // range switch to each value compare price;

    switch(val.value){
        case '500':
            // 2nd tr
            $('.mailchimp-price').html('0')
            $('.aweber-price').html('19')
            $('.convertkit-price').html('29')
            $('.drip-price').html('49')
            $('.getresponse-price').html('15')
            $('.campaignmonitor-price').html('9')
            $('.infusionsoft-price').html('199')

            // 3nd tr
            $('.mailchimp-price-per-subscriber').html('0')
            $('.aweber-price-per-subscriber').html('0.038')
            $('.convertkit-price-per-subscriber').html('0.058')
            $('.drip-price-per-subscriber').html('0.098')
            $('.getresponse-price-per-subscriber').html('0.03')
            $('.campaignmonitor-price-per-subscriber').html('0.018')
            $('.infusionsoft-price-per-subscriber').html('0.398')
            break;
        case '1000':
            // 2nd tr
            $('.mailchimp-price').html('0')
            $('.aweber-price').html('29')
            $('.convertkit-price').html('29')
            $('.drip-price').html('49')
            $('.getresponse-price').html('15')
            $('.campaignmonitor-price').html('29')
            $('.infusionsoft-price').html('199')

            // 3nd tr
            $('.mailchimp-price-per-subscriber').html('0')
            $('.aweber-price-per-subscriber').html('0.029')
            $('.convertkit-price-per-subscriber').html('0.029')
            $('.drip-price-per-subscriber').html('0.049')
            $('.getresponse-price-per-subscriber').html('0.015')
            $('.campaignmonitor-price-per-subscriber').html('0.029')
            $('.infusionsoft-price-per-subscriber').html('0.199')
            break;
        case '1500':
            // 2nd tr
            $('.mailchimp-price').html('0')
            $('.aweber-price').html('29')
            $('.convertkit-price').html('49')
            $('.drip-price').html('49')
            $('.getresponse-price').html('25')
            $('.campaignmonitor-price').html('29')
            $('.infusionsoft-price').html('199')

            // 3nd tr
            $('.mailchimp-price-per-subscriber').html('0')
            $('.aweber-price-per-subscriber').html('0.019')
            $('.convertkit-price-per-subscriber').html('0.033')
            $('.drip-price-per-subscriber').html('0.033')
            $('.getresponse-price-per-subscriber').html('0.017')
            $('.campaignmonitor-price-per-subscriber').html('0.019')
            $('.infusionsoft-price-per-subscriber').html('0.133')
            break;
        case '2000':
            // 2nd tr
            $('.mailchimp-price').html('0')
            $('.aweber-price').html('29')
            $('.convertkit-price').html('49')
            $('.drip-price').html('49')
            $('.getresponse-price').html('25')
            $('.campaignmonitor-price').html('29')
            $('.infusionsoft-price').html('199')

            // 3nd tr
            $('.mailchimp-price-per-subscriber').html('0')
            $('.aweber-price-per-subscriber').html('0.015')
            $('.convertkit-price-per-subscriber').html('0.025')
            $('.drip-price-per-subscriber').html('0.025')
            $('.getresponse-price-per-subscriber').html('0.013')
            $('.campaignmonitor-price-per-subscriber').html('0.015')
            $('.infusionsoft-price-per-subscriber').html('0.1')
            break;
        case '2500':
            // 2nd tr
            $('.mailchimp-price').html('30')
            $('.aweber-price').html('29')
            $('.convertkit-price').html('49')
            $('.drip-price').html('49')
            $('.getresponse-price').html('25')
            $('.campaignmonitor-price').html('29')
            $('.infusionsoft-price').html('199')

            // 3nd tr
            $('.mailchimp-price-per-subscriber').html('0.012')
            $('.aweber-price-per-subscriber').html('0.012')
            $('.convertkit-price-per-subscriber').html('0.02')
            $('.drip-price-per-subscriber').html('0.02')
            $('.getresponse-price-per-subscriber').html('0.01')
            $('.campaignmonitor-price-per-subscriber').html('0.012')
            $('.infusionsoft-price-per-subscriber').html('0.08')
            break;
        case '3000':
            // 2nd tr
            $('.mailchimp-price').html('50')
            $('.aweber-price').html('49')
            $('.convertkit-price').html('49')
            $('.drip-price').html('99')
            $('.getresponse-price').html('45')
            $('.campaignmonitor-price').html('49')
            $('.infusionsoft-price').html('299')

            // 3nd tr
            $('.mailchimp-price-per-subscriber').html('0.017')
            $('.aweber-price-per-subscriber').html('0.016')
            $('.convertkit-price-per-subscriber').html('0.016')
            $('.drip-price-per-subscriber').html('0.033')
            $('.getresponse-price-per-subscriber').html('0.015')
            $('.campaignmonitor-price-per-subscriber').html('0.016')
            $('.infusionsoft-price-per-subscriber').html('0.1')
            break;
        case '3500':
            // 2nd tr
            $('.mailchimp-price').html('50')
            $('.aweber-price').html('49')
            $('.convertkit-price').html('79')
            $('.drip-price').html('99')
            $('.getresponse-price').html('45')
            $('.campaignmonitor-price').html('49')
            $('.infusionsoft-price').html('299')

            // 3nd tr
            $('.mailchimp-price-per-subscriber').html('0.014')
            $('.aweber-price-per-subscriber').html('0.014')
            $('.convertkit-price-per-subscriber').html('0.023')
            $('.drip-price-per-subscriber').html('0.028')
            $('.getresponse-price-per-subscriber').html('0.013')
            $('.campaignmonitor-price-per-subscriber').html('0.014')
            $('.infusionsoft-price-per-subscriber').html('0.085')
            break;
        case '4000':
            // 2nd tr
            $('.mailchimp-price').html('50')
            $('.aweber-price').html('49')
            $('.convertkit-price').html('79')
            $('.drip-price').html('99')
            $('.getresponse-price').html('45')
            $('.campaignmonitor-price').html('49')
            $('.infusionsoft-price').html('299')

            // 3nd tr
            $('.mailchimp-price-per-subscriber').html('0.013')
            $('.aweber-price-per-subscriber').html('0.012')
            $('.convertkit-price-per-subscriber').html('0.02')
            $('.drip-price-per-subscriber').html('0.025')
            $('.getresponse-price-per-subscriber').html('0.011')
            $('.campaignmonitor-price-per-subscriber').html('0.012')
            $('.infusionsoft-price-per-subscriber').html('0.075')
            break;
        case '4500':
            // 2nd tr
            $('.mailchimp-price').html('50')
            $('.aweber-price').html('49')
            $('.convertkit-price').html('79')
            $('.drip-price').html('99')
            $('.getresponse-price').html('45')
            $('.campaignmonitor-price').html('49')
            $('.infusionsoft-price').html('299')

            // 3nd tr
            $('.mailchimp-price-per-subscriber').html('0.011')
            $('.aweber-price-per-subscriber').html('0.011')
            $('.convertkit-price-per-subscriber').html('0.018')
            $('.drip-price-per-subscriber').html('0.022')
            $('.getresponse-price-per-subscriber').html('0.01')
            $('.campaignmonitor-price-per-subscriber').html('0.011')
            $('.infusionsoft-price-per-subscriber').html('0.066')
            break;
        case '5000':
            // 2nd tr
            $('.mailchimp-price').html('50')
            $('.aweber-price').html('49')
            $('.convertkit-price').html('79')
            $('.drip-price').html('99')
            $('.getresponse-price').html('45')
            $('.campaignmonitor-price').html('49')
            $('.infusionsoft-price').html('299')

            // 3nd tr
            $('.mailchimp-price-per-subscriber').html('0.01')
            $('.aweber-price-per-subscriber').html('0.01')
            $('.convertkit-price-per-subscriber').html('0.016')
            $('.drip-price-per-subscriber').html('0.02')
            $('.getresponse-price-per-subscriber').html('0.009')
            $('.campaignmonitor-price-per-subscriber').html('0.01')
            $('.infusionsoft-price-per-subscriber').html('0.06')
            break;
        case '5500':
            // 2nd tr
            $('.mailchimp-price').html('65')
            $('.aweber-price').html('69')
            $('.convertkit-price').html('99')
            $('.drip-price').html('149')
            $('.getresponse-price').html('65')
            $('.campaignmonitor-price').html('89')
            $('.infusionsoft-price').html('379')

            // 3nd tr
            $('.mailchimp-price-per-subscriber').html('0.012')
            $('.aweber-price-per-subscriber').html('0.013')
            $('.convertkit-price-per-subscriber').html('0.018')
            $('.drip-price-per-subscriber').html('0.027')
            $('.getresponse-price-per-subscriber').html('0.012')
            $('.campaignmonitor-price-per-subscriber').html('0.016')
            $('.infusionsoft-price-per-subscriber').html('0.069')
            break;
        case '6000':
            // 2nd tr
            $('.mailchimp-price').html('75')
            $('.aweber-price').html('69')
            $('.convertkit-price').html('99')
            $('.drip-price').html('149')
            $('.getresponse-price').html('65')
            $('.campaignmonitor-price').html('89')
            $('.infusionsoft-price').html('379')

            // 3nd tr
            $('.mailchimp-price-per-subscriber').html('0.013')
            $('.aweber-price-per-subscriber').html('0.012')
            $('.convertkit-price-per-subscriber').html('0.017')
            $('.drip-price-per-subscriber').html('0.025')
            $('.getresponse-price-per-subscriber').html('0.011')
            $('.campaignmonitor-price-per-subscriber').html('0.015')
            $('.infusionsoft-price-per-subscriber').html('0.063')
            break;
        case '6500':
            // 2nd tr
            $('.mailchimp-price').html('75')
            $('.aweber-price').html('69')
            $('.convertkit-price').html('99')
            $('.drip-price').html('149')
            $('.getresponse-price').html('65')
            $('.campaignmonitor-price').html('89')
            $('.infusionsoft-price').html('379')

            // 3nd tr
            $('.mailchimp-price-per-subscriber').html('0.012')
            $('.aweber-price-per-subscriber').html('0.011')
            $('.convertkit-price-per-subscriber').html('0.015')
            $('.drip-price-per-subscriber').html('0.023')
            $('.getresponse-price-per-subscriber').html('0.01')
            $('.campaignmonitor-price-per-subscriber').html('0.014')
            $('.infusionsoft-price-per-subscriber').html('0.058')
            break;
        case '7000':
            // 2nd tr
            $('.mailchimp-price').html('75')
            $('.aweber-price').html('69')
            $('.convertkit-price').html('99')
            $('.drip-price').html('149')
            $('.getresponse-price').html('65')
            $('.campaignmonitor-price').html('89')
            $('.infusionsoft-price').html('379')

            // 3nd tr
            $('.mailchimp-price-per-subscriber').html('0.011')
            $('.aweber-price-per-subscriber').html('0.01')
            $('.convertkit-price-per-subscriber').html('0.014')
            $('.drip-price-per-subscriber').html('0.021')
            $('.getresponse-price-per-subscriber').html('0.009')
            $('.campaignmonitor-price-per-subscriber').html('0.013')
            $('.infusionsoft-price-per-subscriber').html('0.054')
            break;
        case '7500':
            // 2nd tr
            $('.mailchimp-price').html('75')
            $('.aweber-price').html('69')
            $('.convertkit-price').html('99')
            $('.drip-price').html('149')
            $('.getresponse-price').html('65')
            $('.campaignmonitor-price').html('89')
            $('.infusionsoft-price').html('379')

            // 3nd tr
            $('.mailchimp-price-per-subscriber').html('0.01')
            $('.aweber-price-per-subscriber').html('0.009')
            $('.convertkit-price-per-subscriber').html('0.013')
            $('.drip-price-per-subscriber').html('0.02')
            $('.getresponse-price-per-subscriber').html('0.009')
            $('.campaignmonitor-price-per-subscriber').html('0.012')
            $('.infusionsoft-price-per-subscriber').html('0.051')
            break;
        case '8000':
            // 2nd tr
            $('.mailchimp-price').html('75')
            $('.aweber-price').html('69')
            $('.convertkit-price').html('99')
            $('.drip-price').html('149')
            $('.getresponse-price').html('65')
            $('.campaignmonitor-price').html('89')
            $('.infusionsoft-price').html('379')

            // 3nd tr
            $('.mailchimp-price-per-subscriber').html('0.009')
            $('.aweber-price-per-subscriber').html('0.009')
            $('.convertkit-price-per-subscriber').html('0.012')
            $('.drip-price-per-subscriber').html('0.019')
            $('.getresponse-price-per-subscriber').html('0.008')
            $('.campaignmonitor-price-per-subscriber').html('0.011')
            $('.infusionsoft-price-per-subscriber').html('0.047')
            break;
        case '8500':
            // 2nd tr
            $('.mailchimp-price').html('75')
            $('.aweber-price').html('69')
            $('.convertkit-price').html('119')
            $('.drip-price').html('149')
            $('.getresponse-price').html('65')
            $('.campaignmonitor-price').html('89')
            $('.infusionsoft-price').html('379')

            // 3nd tr
            $('.mailchimp-price-per-subscriber').html('0.009')
            $('.aweber-price-per-subscriber').html('0.008')
            $('.convertkit-price-per-subscriber').html('0.014')
            $('.drip-price-per-subscriber').html('0.018')
            $('.getresponse-price-per-subscriber').html('0.008')
            $('.campaignmonitor-price-per-subscriber').html('0.01')
            $('.infusionsoft-price-per-subscriber').html('0.045')
            break;
        case '9000':
            // 2nd tr
            $('.mailchimp-price').html('75')
            $('.aweber-price').html('69')
            $('.convertkit-price').html('199')
            $('.drip-price').html('149')
            $('.getresponse-price').html('65')
            $('.campaignmonitor-price').html('89')
            $('.infusionsoft-price').html('379')

            // 3nd tr
            $('.mailchimp-price-per-subscriber').html('0.008')
            $('.aweber-price-per-subscriber').html('0.008')
            $('.convertkit-price-per-subscriber').html('0.013')
            $('.drip-price-per-subscriber').html('0.017')
            $('.getresponse-price-per-subscriber').html('0.007')
            $('.campaignmonitor-price-per-subscriber').html('0.01')
            $('.infusionsoft-price-per-subscriber').html('0.042')
            break;
        case '9500':
             // 2nd tr
             $('.mailchimp-price').html('75')
             $('.aweber-price').html('69')
             $('.convertkit-price').html('119')
             $('.drip-price').html('149')
             $('.getresponse-price').html('65')
             $('.campaignmonitor-price').html('89')
             $('.infusionsoft-price').html('379')
 
             // 3nd tr
             $('.mailchimp-price-per-subscriber').html('0.008')
             $('.aweber-price-per-subscriber').html('0.007')
             $('.convertkit-price-per-subscriber').html('0.013')
             $('.drip-price-per-subscriber').html('0.016')
             $('.getresponse-price-per-subscriber').html('0.007')
             $('.campaignmonitor-price-per-subscriber').html('0.009')
             $('.infusionsoft-price-per-subscriber').html('0.04')
             break;
        case '10000':
            // 2nd tr
            $('.mailchimp-price').html('75')
            $('.aweber-price').html('69')
            $('.convertkit-price').html('119')
            $('.drip-price').html('149')
            $('.getresponse-price').html('65')
            $('.campaignmonitor-price').html('89')
            $('.infusionsoft-price').html('379')

            // 3nd tr
            $('.mailchimp-price-per-subscriber').html('0.008')
            $('.aweber-price-per-subscriber').html('0.007')
            $('.convertkit-price-per-subscriber').html('0.012')
            $('.drip-price-per-subscriber').html('0.015')
            $('.getresponse-price-per-subscriber').html('0.007')
            $('.campaignmonitor-price-per-subscriber').html('0.009')
            $('.infusionsoft-price-per-subscriber').html('0.038')
            break;
        case '10500':
            // 2nd tr
            $('.mailchimp-price').html('90')
            $('.aweber-price').html('149')
            $('.convertkit-price').html('159')
            $('.drip-price').html('149')
            $('.getresponse-price').html('145')
            $('.campaignmonitor-price').html('129')
            $('.infusionsoft-price').html('599')

            // 3nd tr
            $('.mailchimp-price-per-subscriber').html('0.009')
            $('.aweber-price-per-subscriber').html('0.014')
            $('.convertkit-price-per-subscriber').html('0.015')
            $('.drip-price-per-subscriber').html('0.014')
            $('.getresponse-price-per-subscriber').html('0.014')
            $('.campaignmonitor-price-per-subscriber').html('0.012')
            $('.infusionsoft-price-per-subscriber').html('0.057')
            break;

            console.log(val.value)
        default:
            console.log('not found')
    }
}














// hidden section working

$('[data-toggling="content_body"]').hide();
function showContentBody() {
    $('[data-toggling="content_body"]').show();

}

/**
 * 3 Step Service Appointment
 *
 */

var pmmStepsServiceAppointment = {

    formId: $( "#serviceAppointment" ),
    validator: '',
    section1: $('#serviceAppointment__section1'),
    section2: $('#serviceAppointment__section2'),
    section3: $('#serviceAppointment__section3'),
    submitBtn: $('.btnSubmit'),
    requestedDate: '',
    requestedTime: '',
    vehicleInfo: '',
    serviceRequested: '',

    // create step buttons
    createStepButtons: function(){
        $('#serviceAppointment__section1 .frmValues').after('<div id="step1-btns" class="step-btns"><span id="step1-btn-continue" class="step-btn step-btn-continue">Continue</span></div>');
        $('#serviceAppointment__section2 .frmValues').after('<div id="step2-btns" class="step-btns"><span id="step2-btn-back" class="step-btn step-btn-back">Back</span> <span id="step2-btn-continue" class="step-btn step-btn-continue">Continue</span></div>');
        $('#submit').val('Submit Service Request').before('<span id="step3-btn-back" class="step-btn step-btn-back">Back</span>');
    },

    // add the on click event to all the Continue buttons
    tagBtns: function(){
        // on click, validate and then go to step 2
        $('#step1-btn-continue').on('click', function(){
            if( pmmStepsServiceAppointment.validStep1() ){
                pmmStepsServiceAppointment.goToStep2();
            }
        });
        // on click, go to step 1
        $('#step2-btn-back').on('click', function(){
            pmmStepsServiceAppointment.goToStep1();
        });
        // on click, validate and then go to step 3
        $('#step2-btn-continue').on('click', function(){
            if( pmmStepsServiceAppointment.validStep2() ){
                pmmStepsServiceAppointment.goToStep3();
            }
        });
        // on click, go to step 2
        $('#step3-btn-back').on('click', function(){
            $('#serviceAppointment_confirmation').remove();
            pmmStepsServiceAppointment.goToStep2();
        });
    },

    // validate step 1; returns true or false
    validStep1: function(){
        if( this.validator.element( '#sch_Time' ) ){
            this.requestedDate = $('#serviceAppointment__sch_date').val();
            this.requestedTime = $( '#sch_Time').val();
            return true;
        }
        else{
            return false;
        }
    },

    // validate step 2; returns true or false
    validStep2: function(){
        if( this.validator.element('#serviceAppointment__vYear') && this.validator.element('#serviceAppointment__vMake') && this.validator.element('#serviceAppointment__vModel') && this.validator.element('#serviceAppointment__vMileage') && this.validator.element('#serviceAppointment__cust_Needs') ){
            this.vehicleInfo = $('#serviceAppointment__vYear').val() + ' ' + $('#serviceAppointment__vMake').val() + ' ' + $('#serviceAppointment__vModel').val() ;
            this.serviceRequested = $('#serviceAppointment__cust_Needs').val();
            return true;
        }
        else{
            return false;
        }
    },

    // switch images
    switchImage: function( stepNumber ){
        var imgSrc = '/usr/theme/image/step' + stepNumber + '.png';
        $('#stepsImg').attr('src', imgSrc);
    },

    // go to step 1
    goToStep1: function(){
        this.switchImage( 1 );
        this.section2.hide();
        this.section3.hide();
        this.section1.show();
        this.submitBtn.hide();
    },

    // go to step 2
    goToStep2: function(){
        this.switchImage( 2 );
        this.section1.hide();
        this.section3.hide();
        this.section2.show();
        this.submitBtn.hide();
    },

    // got to step 3
    goToStep3: function(){
        this.switchImage( 3 );
        this.section1.hide();
        this.section2.hide();
        this.section3.show();
        this.submitBtn.show();
        this.displayConfirmation();
    },

    // display the confirmation
    displayConfirmation: function(){
        this.section3.parent().before('<div id="serviceAppointment_confirmation"></div>');
        $('#serviceAppointment_confirmation').append(this.getConfirmationHTML());
        this.tagEditBtns();
    },

    // this is the HTML for the confirmation on step 3
    getConfirmationHTML: function(){
        var html = '<h4>Vehicle Information: <span class="edit">(<span class="goToStep goToStep2">edit</span>)</span></h4>';
        html += '<p>' + this.vehicleInfo + '</p>';
        html += '<h4>Service Requested: <span class="edit">(<span class="goToStep goToStep2">edit</span>)</span></h4>';
        html += '<p>' + this.serviceRequested + '</p>';
        html += '<h4>Requested Date and Time: <span class="edit">(<span class="goToStep goToStep1">edit</span>)</span></h4>';
        html += '<p><strong>Date:</strong> ' + this.requestedDate + '<br /><strong>Time:</strong> ' + this.requestedTime + '</p>';

        return html;
    },

    // tag the edit buttons on the confirmation
    tagEditBtns: function(){
        $('.goToStep1').on('click', function(){
            pmmStepsServiceAppointment.goToStep1();
            $('#serviceAppointment_confirmation').remove();
        });

        $('.goToStep2').on('click', function(){
            pmmStepsServiceAppointment.goToStep2();
            $('#serviceAppointment_confirmation').remove();
        });
    },

    // initialize the script
    init: function(){
        this.validator = this.formId.validate();
        this.createStepButtons();
        this.tagBtns();
        this.section1.show();
    }
};

$(document).ready(function(){
    pmmStepsServiceAppointment.init();
});
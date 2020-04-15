interface SelectionOptions {
    value: string;
    viewValue: string;
  }

export class GeneralData {
    public tabletStatus : SelectionOptions[] = [
        {value: 'needssetup', viewValue: 'Needs setup'},
        {value: 'broken', viewValue: 'Broken'},
        {value: 'ready', viewValue: 'Ready to be sent to client'},
        {value: 'senttoclient', viewValue: 'Sent To Client'},
        {value: 'returnfromclient', viewValue: 'Returned from Client'},
    ]

    public modelNumbers : SelectionOptions[] = [
        {value: '0', viewValue: 'SM-T595'},
    ]
}

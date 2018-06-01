
export const defaultSchema = [{
  name: 'CreateUser',
  type: 'input',
  label: '创建人',
  placeholder: '创建人的姓名'
},
{
  name: 'CreateTime',
  type: 'date',
  label: '创建时间',
  placeholder: '创建时间区间'
}
];

export class Schema {
  constructor (name, type, label, placeholder = '', options = null) {
    this.name = name;
    this.type = type;
    this.label = label;
    this.placeholder = placeholder;
    this.options = options;
  }
}

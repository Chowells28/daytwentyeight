export interface Value {
  _id: String;
  value: String;
  value_demonstrated: [{
      core_value_demonstrated: String,
      is_active: Boolean,
      person_nominated: String,
      person_nominated_by: String,
      reason_for_nomination: String
    }];
}

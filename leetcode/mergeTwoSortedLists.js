function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}

var mergeTwoLists = function (list1, list2) {
  if (!list1) {
    return list2;
  } else if (!list2) {
    return list1;
  } else {
    if (list1.val <= list2.val) {
      const result = new ListNode(list1.val);
      result.next = mergeTwoLists(list1.next, list2);
      return result;
    } else {
      const result = new ListNode(list2.val);
      result.next = mergeTwoLists(list1, list2.next);
      return result;
    }
  }
};

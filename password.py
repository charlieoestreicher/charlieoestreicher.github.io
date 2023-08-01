"""
6 <= #chars <= 20
#uppercase >= 1
#lowercase >= 1
#digits >= 1
#charactersInRow <= 2

can insert character
can delete character
can replace character

how many steps to get to good?
"""

'''
def strongPasswordChecker(password):
    """
    :type password: str
    :rtype: int
    """
    return 0

def isValid(password):
    if len(password) < 6 or len(password) > 20:
        return False
    numLower = len([a for a in password if a.islower()])
    numUpper = len([a for a in password if a.isupper()])
    numDigits = len([a for a in password if not a.isalpha()])
    if numLower<1:
        return False
    elif numUpper<1:
        return False
    elif numDigits<1:
        return False
    for ltr in password:
        if (ltr*3) in password:
            return False
    else:
        return True
    
    

password1 = "1337C0d3"
password2 = "Baaabb0" 

print(isValid(password2))
'''



def mergeKLists(lists):
    """
    while at least one list exists
        find smallest first item and add it to end of list
        remove that item from that linked list
    """
    lists.sort(key=lambda x: x.val)
    hd = curr = ListNode(lists[0])

    while len(lists) > 0:
        lists.sort(key=lambda x: x.val)
        curr.next= lists[0]
        curr = curr.next
        lists[0] = lists[0].next
        if lists[0] == None:
            lists = lists[1:]
    return hd


#----------------------------------------#

class ListNode(object):
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

test=[[1, 4, 5],[2, 6],[1, 3, 4]]
linkedlsts = []
for lst in test:
    tail = head = ListNode(lst[0])
    for x in lst[1:]:
        tail.next = ListNode(x)
        tail = tail.next
    linkedlsts.append(head)

lnkd = mergeKLists(linkedlsts)

while lnkd!=None:
    print(lnkd.val)
    lnkd = lnkd.next








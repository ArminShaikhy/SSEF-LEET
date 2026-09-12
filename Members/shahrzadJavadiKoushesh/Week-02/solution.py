class Solution(object):
    def search(self, nums, target):
        left = 0
        right = len(nums) - 1
        
        while left <= right:
            mid = (left + right) // 2
            
            if nums[mid] == target:
                return mid
            elif nums[mid] < target:
                left = mid + 1
            else:
                right = mid - 1
        
        return -1


print(Solution().search([-2, 10, 20, 30, 35, 40], 9))  # Output: -1
print(Solution().search([-2, 10, 20, 30, 35, 40], 30))  # Output: 3
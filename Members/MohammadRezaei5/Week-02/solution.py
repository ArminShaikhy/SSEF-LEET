class Solution:
    def search(self, nums, target):
        low = 0
        high = len(nums) - 1

        while low <= high:
            mid = (low + high) // 2

            if nums[mid] == target:
                return mid

            elif nums[mid] < target:
                low = mid + 1

            else:
                high = mid - 1

        return -1

sol = Solution()
print(sol.search([-1, 0, 3, 5, 9, 12], 9))
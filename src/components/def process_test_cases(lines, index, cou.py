def process_test_cases(lines, index, count, results):
    if count == 0:
        return results
    if index >= len(lines):
        return results + [-1]
    x_str = lines[index].strip()
    y_str = lines[index + 1].strip() if index + 1 < len(lines) else ""
    
    try:
        x = int(x_str)
        y_list = list(map(int, y_str.split()))
        if len(y_list) != x:
            return process_test_cases(lines, index + 2, count - 1, results + [-1])
        filtered = list(filter(lambda y: y <= 0, y_list))
        sum_power4 = sum(map(lambda y: y ** 4, filtered))
        return process_test_cases(lines, index + 2, count - 1, results + [sum_power4])
    except:
        return process_test_cases(lines, index + 2, count - 1, results + [-1])

def main():
    import sys
    lines = sys.stdin.read().splitlines()
    if not lines:
        return
    try:
        n = int(lines[0].strip())
        result = process_test_cases(lines, 1, n, [])
        print('\n'.join(map(str, result)))
    except:
        pass

if __name__ == "__main__":
    main()

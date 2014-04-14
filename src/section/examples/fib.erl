start(N) -> do_fib(0, 1, N).
do_fib(_, B, 1) -> B;
do_fib(A, B, N) -> do_fib(B, A + B, N - 1).

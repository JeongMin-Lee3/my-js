$(document).ready(() => {
    const $container = $('#todo-list-container');
    const $count = $('#todo-count');

    $(document).on('click', '.todo-item', function(){
        var todoId = $(this).data('todo-id');

        window.location.href = `./todo.html?id=${todoId}`;
    });



    $.ajax({
        url: 'https://jsonplaceholder.typicode.com/todos/',
        type: 'GET',
        success: function (response) {
            $container.empty();

            if (!response.length) {
                $container.append('<div class="todo-empty">등록된 할 일이 없습니다.</div>');
                $count.text('0건');
                return;
            }

            const completedCount = response.filter((todo) => todo.completed).length;

            $count.text(`총 ${response.length}건 · 완료 ${completedCount}건`);

            for (let todo of response) {
                const statusClass = todo.completed ? 'done' : 'pending';
                const statusText = todo.completed ? '완료' : '진행중';
                const itemClass = todo.completed ? 'todo-item completed' : 'todo-item';
                const checkMark = todo.completed ? '✓' : '';

                $container.append(`
                    <div class="${itemClass}" data-todo-id="${todo.id}">
                        <span class="todo-check">${checkMark}</span>
                        <span class="todo-id">${todo.id}</span>
                        <span class="todo-title">${todo.title}</span>
                        <span class="todo-status ${statusClass}">${statusText}</span>
                    </div>
                `);

            }
        },
        error: function () {
            $container.html('<div class="todo-error">할 일 목록을 불러오지 못했습니다. 잠시 후 다시 시도해주세요.</div>');
            $count.text('오류');
        },
    });
});

class HabitsController < ApplicationController
    before_action :set_habit, only: [:show, :edit, :update, :destroy]

    # GET /habits
    def index
      habits = Habit.all.order(created_at: :desc)
      render inertia: 'Habits/Index', props: {
        habits: habits.as_json(only: [:id, :name, :description, :frequency, :color, :active, :created_at])
      }
    end

    # GET /habits/:id
    def show
      render inertia: 'Habits/Show', props: {
        habit: @habit
      }
    end

    # GET /habits/new
    def new
      render inertia: 'Habits/New'
    end

    # POST /habits
    def create
      habit = Habit.new(habit_params)

      if habit.save
        redirect_to habits_path, notice: 'Habit created successfully!'
      else
        redirect_to new_habit_path, inertia: { errors: habit.errors }
      end
    end

    # GET /habits/:id/edit
    def edit
      render inertia: 'Habits/Edit', props: {
        habit: @habit
      }
    end

    # PATCH/PUT /habits/:id
    def update
      if @habit.update(habit_params)
        redirect_to habits_path, notice: 'Habit updated successfully!'
      else
        redirect_to edit_habit_path(@habit), inertia: { errors: @habit.errors }
      end
    end

    # DELETE /habits/:id
    def destroy
      @habit.destroy
      redirect_to habits_path, notice: 'Habit deleted successfully!'
    end

    private

    def set_habit
      @habit = Habit.find(params[:id])
    end

    def habit_params
      params.require(:habit).permit(:name, :description, :frequency, :color, :active)
    end
  end
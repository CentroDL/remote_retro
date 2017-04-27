defmodule RemoteRetro.Retro do
  @moduledoc false
  use RemoteRetro.Web, :model

  @primary_key {:id, :binary_id, autogenerate: true}
  @derive {Poison.Encoder, except: [:__meta__]}

  schema "retros" do
    has_many :participations, RemoteRetro.Participation
    has_many :ideas, RemoteRetro.Idea
    field :stage, :string, read_after_writes: true

    timestamps()
  end
end
